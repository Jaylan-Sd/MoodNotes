import React, { useEffect, useState } from "react";



function NoteList () {
    const [notes, setNotes] = useState ([]);

    useEffect (() => {
        fetch ("https://moodnotes-backend.onrender.com/notes")
        .then ((res) => res.json())
        .then ((data) => setNotes(data));
    }, []);

    const handleDelete = (id) => {
        fetch (`https://moodnotes-backend.onrender.com/notes/${id}`, {
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