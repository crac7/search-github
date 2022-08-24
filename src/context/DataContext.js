import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProivder = ({ children }) => {
    const [searchData, setSearchData] = useState('');
    return (
        <DataContext.Provider value={{ searchData, setSearchData }}>
            {children}
        </DataContext.Provider>)
}