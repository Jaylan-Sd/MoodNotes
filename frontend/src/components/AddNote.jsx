import React, {useState} from "react";

function AddNote () {
    const [title ,setTitle] = useState("");
    const [content, setContent] = useState("")

    function handleSubmit (e) {
        e.preventDefault();

        const newNote = {
            title,
            content,
        };

        fetch ("https://moodnotes-backend.onrender.com/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote),
        })
        
        .then ((res) => res.json() )
        .then (() => {
            setTitle("");
            setContent("");
        })
    }

   return (
    <div>
      <h2>Add a New MoodNote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Note</button>
      </form>
    </div>
  );

}

export default AddNote;
