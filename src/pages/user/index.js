import React, { useEffect, useState, useContext } from 'react';
import Pagination from '../../components/pagination';
import User from '../../components/user';
import axios from 'axios';
import { DataContext } from "../../context/DataContext";
   
const Users = () => {
  const { searchData, setSearchData } = useContext(DataContext);
  const [dataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [listUser, setlistUser] = useState([]);
  const getUser = async (searchData) => {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchData};per_page=${dataPerPage};page=${currentPage}`);
      if (response?.data) {
        setTotalAccounts(response.data.total_count)
        setlistUser(response.data.items)
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{setSearchData('')},[]);
  useEffect(() => {
    getUser(searchData);
  }, [currentPage, searchData])
  return (
    <>
      <div className='container-fluid d-flex justify-content-center'>
        <span className='fw-bold'>{totalAccounts} users</span>
      </div>

      {
        listUser.map(items =>
          <User key={items.id} name={items.login} img={items.avatar_url} url={items.html_url} />
        )
      }

      <Pagination
        itemsCount={totalAccounts}
        itemsPerPage={dataPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        alwaysShown={false}
      />
    </>
  );
}



export default Users;