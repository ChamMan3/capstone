import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import NavBar from "./NavBar"
import Profile from "./Profile"
import Search from "./Search"
import Login from "./Login"
import Home from "./Home"




export default function App() {
  const [user, setUser] = useState(null);
  const [folders, setFolders] = useState([])
  const [songs, setSongs] = useState([])





    return (
      <div>
        <NavBar/>
        {/* { !currentUser? <Login error={'please login'} updateUser={updateUser} /> : */}
      <>
        <Routes>
          <Route path="/profile" element={<Profile user={user} setUser={setUser} folders={folders} setFolders={setFolders} songs={songs} setSongs={setSongs} />}/>
          <Route path="/search" element={<Search setSongs={setSongs}/> }/>
          <Route path="/login" element={<Login user={user} setUser={setUser} setFolders={setFolders} setSongs={setSongs}/>} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser} setFolders={setFolders} setSongs={setSongs}/>}/>
          <Route path="/" element={<Home user={user}/>}/>
        </Routes> 
      </>
      </div>
    );
}

