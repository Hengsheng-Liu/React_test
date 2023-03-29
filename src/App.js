import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/navbar';
import Note from "./components/Note";
const App = () =>{
    return(
        <div>
            <Navbar/>
        </div>
    )
}
export default App