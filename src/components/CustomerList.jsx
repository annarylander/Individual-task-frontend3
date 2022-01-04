import React, { useEffect, useState } from "react";

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

  return (
    <div>
      <button onClick={fetchData}>Refresh</button>
      {customerList && (
        <>
          <h2>Customers</h2>
          {customerList.map((item, index) => {
            return (
              <p key={index}>
                {" "}
                {item.name} {item.email}{" "}
              </p>
            );
          })}
        </>
      )}
    </div>
  );
}
