import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Components/firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  }

  function register(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="signIn">
            Sign in
          </button>
        </form>

        <p>
          By Signing-in you agree to Amazon's conditions of Use & Sale. Please
          see our Privacy notice, our Cookies notice and our interest-based ads
          notice.
        </p>
        <button className="create" onClick={register} type="submit">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
