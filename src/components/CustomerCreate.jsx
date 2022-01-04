import React, { useState } from "react";
import NavButton from "./NavButton";

export default function CustomerCreate(props) {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber,
    };
    console.log(payload);
    const url = "https://frebi.willandskill.eu/api/v1/customers";
    const token = localStorage.getItem("token");

    fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      },
      []
    )
      .then((res) => res.json())
      .then((data) => props.onSuccess());
  }

  function renderInput(type, value, setValue, placeholder, pattern = null) {
    return (
      <div>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          pattern={pattern}
        />
      </div>
    );
  }

  return (
    <div>
      <h2> Add customer </h2>
      <form onSubmit={handleOnSubmit}>
        {renderInput("text", name, setName, "Name")}
        {renderInput(
          "text",
          organisationNr,
          setOrganisationNr,
          "Organisation number"
        )}
        {renderInput("text", vatNr, setVatNr, "Vat number", "SE[0-9]{10}")}
        {renderInput("text", reference, setReference, "Reference")}
        {renderInput("text", paymentTerm, setPaymentTerm, "Payment term")}
        {renderInput("text", website, setWebsite, "Website")}
        {renderInput("text", email, setEmail, "Email")}
        {renderInput("text", phoneNumber, setPhoneNumber, "Phone number")}
        <NavButton margin type="submit">
          Add customer
        </NavButton>
      </form>
    </div>
  );
}
