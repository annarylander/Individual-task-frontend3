import React, { createContext, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import UserCreatePage from "./pages/UserCreatePage";
import CustomerListPage from "./pages/CustomerListPage";

const UserContext = createContext({});
const CustomerContext = createContext({});

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: #FDEBD8;
  font-family: "Source Code Pro", monospace;
  text-align: center;
}`;

function App() {
  const [userInformation, setUserInformation] = useState({});
  const [customerList, setCustomerList] = useState([]);

  return (
    <UserContext.Provider value={{ userInformation, setUserInformation }}>
      <CustomerContext.Provider value={{ customerList, setCustomerList }}>
        <>
          <GlobalStyle />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/create" element={<UserCreatePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/customers" element={<CustomerListPage />} />
            <Route path="/home/customers/:id" element={<DetailPage />} />
          </Routes>
        </>
      </CustomerContext.Provider>
    </UserContext.Provider>
  );
}

export { UserContext };
export { CustomerContext };
export default App;
