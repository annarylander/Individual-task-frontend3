import React, { useContext, useEffect } from "react";
import CustomerCreate from "../components/CustomerCreate";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { CustomerContext } from "../App";

export default function Customers() {
  const { customerList, setCustomerList } = useContext(CustomerContext);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const url = "https://frebi.willandskill.eu/api/v1/customers";
    const token = localStorage.getItem("token");

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  function handleOnDelete(id) {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
    const token = localStorage.getItem("token");

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => fetchData());
  }

  return (
    <div>
      <CustomerCreate onSuccess={fetchData} />
      {customerList && (
        <>
          <h2>Customers</h2>
          {customerList.map((item, index) => {
            return (
              <div key={item.id}>
                <h3 key={index}>
                  <Link to={`/home/customers/${item.id}`}> {item.name} </Link>{" "}
                </h3>
                <NavButton onClick={(e) => handleOnDelete(item.id)}>
                  Delete
                </NavButton>
              </div>
             
            );
            
          })}
          <Link to={"/home"}>
          <NavButton margin purple >Back</NavButton>
          </Link>
        </>
      )}
    </div>
  );
}
