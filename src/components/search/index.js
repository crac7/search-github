
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";

const Search = () => {
    const { searchData, setSearchData } = useContext(DataContext);
    const [value, setValue] = useState();
    useEffect(()=>{setValue(searchData)},[searchData])
    const searching=(e)=>{
       if(e.target.value==='' && searchData!=='' ){
        setSearchData('')
       } else{
        setValue(e.target.value);
       }
    }
    return (
        <form className="d-flex">
            <input className="form-control me-2" 
            type="search" 
            placeholder="Search"
             aria-label="Search"
             data-testid="search-element"
              value={value} 
              onChange={searching} />
            <button  type="button" className="btn btn-outline-success"  onClick={()=>{setSearchData(value)}}>Search</button>
        </form>
    )
}

export default Search;