"use client";

import { useState } from "react";

export default function CreateNote() {
  const [title, SetTitle] = useState("");
  const [notes_content, SetContent] = useState("");

  const NoteDiv = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/users/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        notes_content,
      }),
    });
  };

  return (
    <div className="NoteDiv">
      <form
        onSubmit={NoteDiv}
        style={{
          transform: "translateY(130%)",
        }}
      >
        <input
          className="NoteDiv"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <textarea
          className="NoteDiv"
          placeholder="Content"
          value={notes_content}
          onChange={(e) => SetContent(e.target.value)}
          required
        />
        <button type="submit">Create the note</button>
      </form>
    </div>
  );
}
