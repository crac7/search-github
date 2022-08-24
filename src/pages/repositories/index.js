import React, { useEffect, useState, useContext } from 'react';
import Pagination from '../../components/pagination';
import User from '../../components/user';
import axios from 'axios';
import { DataContext } from "../../context/DataContext";
import Repo from "../../components/repo";
   
const Users = () => {
  const { searchData, setSearchData } = useContext(DataContext);
  const [dataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [listRepo, setlistRepo] = useState([]);
  const getRepo = async (searchData) => {
    try {
      const response = await axios.get(`https://api.github.com/orgs/${searchData}/repos?per_page=${dataPerPage};page=${currentPage}`);
      if (response.data) {
        setTotalAccounts(response.data.length)
        setlistRepo(response.data)
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{setSearchData('')},[]);
  useEffect(() => {
    getRepo(searchData);
  }, [currentPage, searchData])
  return (
    <>
      <div className='container-fluid d-flex justify-content-center'>
        <span className='fw-bold'>{totalAccounts} Repos</span>
      </div>

      
      {
        listRepo.map(item =>
          <Repo key={item.id} {...item}/>
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