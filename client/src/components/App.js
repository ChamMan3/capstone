import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import NavBar from "./NavBar"
import Profile from "./Profile"
import Search from "./Search"
import Login from "./Login"
import Home from "./Home"
import Logout from "./Logout";



export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


    return (
      <div>
        <NavBar/>
        {/* { !currentUser? <Login error={'please login'} updateUser={updateUser} /> : */}
      <>
        <Routes>
          <Route path="/profile" element={<Profile user={user} setUser={setUser}/>}/>
          <Route path="/search" element={<Search /> }/>
          <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser}/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes> 
      </>
      </div>
    );
}

