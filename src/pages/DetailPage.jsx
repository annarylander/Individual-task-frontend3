import React from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import CustomerChange from "../components/CustomerChange";

export default function DetailPage() {
  let params = useParams();
  return (
    <div>
      <h2>Details</h2>
      <Detail id={params.id} />
      <Link to={"/home/customers"}>
        <NavButton purple> Back </NavButton>
      </Link>
      <CustomerChange id={params.id} />
    </div>
  );
}
