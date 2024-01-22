import Link from 'next/link';
import styles from './Notes.module.css';
import prisma from '../../lib/prisma'
import CreateNote from "./Notes";

export default async function Notes() {
  const notes = await prisma.notes.findMany();
  return (
    <div>
      <h1>Notes</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {notes && notes.length > 0 ? (
          notes.map((note: any) => <Note key={note.id} note={note} />)
        ) : (
          <li>No notes found</li>
        )}
      </div>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, notes_content, createdAt } = note || {};
  const formattedDate = new Date(note.createdAt).toLocaleDateString();

  return (
    <Link
      href={`/notes/${id}`}
      style={{
        color: "orange",
      }}
    >
      <div>
        <h3>{title}</h3>
        <h5>{notes_content}</h5>
        <p>{formattedDate}</p>
      </div>
    </Link>
  );
}