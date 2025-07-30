import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function NoteList () {
    const [notes, setNotes] = useState ([]);

    useEffect (() => {
        fetch ("http://localhost:5000/notes")
        .then ((res) => res.json())
        .then ((data) => setNotes(data));
    }, []);

    const handleDelete = (id) => {
        fetch (`http://localhost:5000/notes/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setNotes(notes.filter((note) => note.id !==id))
        })

    
    }

    return (
        <div>
            <h2>All Mood Notes</h2>

            {notes.map((note) => (
                <div key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => handleDelete(note.id)}>Delete</button>
                </div>
            ))}
        </div>
    );

}

export default NoteList;