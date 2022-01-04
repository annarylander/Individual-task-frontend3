import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import styled from "styled-components";
import { UserContext } from "../App";

const Title = styled.h1`
  color: #31081f;
`;

export default function HomePage() {
  const { userInformation, setUserInformation } = useContext(UserContext);

  useEffect(() => {
    const url = "https://frebi.willandskill.eu/api/v1/me";
    const token = localStorage.getItem("token");
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInformation(data));
  }, []);

  return (
    <div>
      <Title> Home page </Title>
      <Link to="/home/customers">
        <NavButton> Customers </NavButton>
      </Link>

      {userInformation && (
        <>
          <h2>You are logged in: </h2>
          <h3>
            {userInformation.firstName} {userInformation.lastName}{" "}
          </h3>
          <p>Email adress: {userInformation.email}</p>
        </>
      )}
    </div>
  );
}
