import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignUp ({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
        {/* FORWARD PATH */}
        {/* { user ? <Navigate to="/" /> : null} */}

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="text"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
            <input
            type="password"
            id="password_confirmation"
            placeholder="confirm password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            />

            <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            {errors.map((err) => (
            <p key={err}>{err}</p>
            ))}
        </form>

    </>
  );
}