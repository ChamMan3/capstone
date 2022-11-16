import React, { useState } from "react";
import Error from './Error'
import { Navigate } from 'react-router-dom';

export default function Login ({ user, setUser, setSongs, setFolders }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((data) => {
              setUser(data);
              setFolders(data.folders)
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

      return (
        <>
          {/* FORWARD PATH */}
          { user ? <Navigate to="/" /> : null}
          
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button variant="fill" color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
              </button>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
          </form>
        </>
      );
}