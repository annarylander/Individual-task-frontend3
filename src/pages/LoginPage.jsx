import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavButton from "../components/NavButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let location = useLocation();
  var params = new URLSearchParams(location.search);

  useEffect(() => {
    if (params.get("uid")) {
      activate();
    }
  }, []);

  function activate() {
    const url = "https://frebi.willandskill.eu/auth/users/activate/";
    const payload = { uid: params.get("uid"), token: params.get("token") };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    navigate("/login");
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { email, password };
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        localStorage.setItem("token", token);
        navigate("/home");
      });
  }

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NavButton type="submit">Login</NavButton>
      </form>
    </div>
  );
}
