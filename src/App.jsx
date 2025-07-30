import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import Home from "./Home";
import About from "./components/About";




function App () {
    return (
        <Router>

            <nav>
                <Link to = "/">Home</Link>|{""}
                <Link to = "/about">About</Link>|{""}
                <Link to = "/notes">Notes</Link>|{""}
                <Link to = "/add">Add Note</Link>

            </nav>

            <Routes>
                <Route path = "/"  element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/notes" element = {<NoteList />} />
                <Route path = "/add" element = {<AddNote />} />
            </Routes>
        </Router>
    )
}


export default App;

