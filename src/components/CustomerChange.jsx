import React, { useState } from "react";
import NavButton from "./NavButton";

export default function CustomerChange(props) {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function upDateUser(e) {
    console.log(props.id);

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
    const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`;
    const token = localStorage.getItem("token");

    fetch(
      url,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      },
      []
    )
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setOrganisationNr(data.organisationNr);
        setVatNr(data.vatNr);
        setReference(data.reference);
        setPaymentTerm(data.paymentTerm);
        setWebsite(data.website);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
      });
  }

  return (
    <div>
      <h2> Update information </h2>

      <form onSubmit={upDateUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="organisationNr"
          value={organisationNr}
          onChange={(e) => setOrganisationNr(e.target.value)}
        />
        <input
          type="text"
          placeholder="vatNr"
          value={vatNr}
          onChange={(e) => setVatNr(e.target.value)}
        />
        <input
          type="text"
          placeholder="reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <input
          type="text"
          placeholder="paymentTerm"
          value={paymentTerm}
          onChange={(e) => setPaymentTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <NavButton purple onClick={(item) => upDateUser(item.id)}>
          Update information
        </NavButton>
      </form>
    </div>
  );
}
