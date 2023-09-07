import Link from 'next/link';
import styles from './Notes.module.css';
import prisma from '../../lib/prisma'

export default async function Notes() {
  const notes = await prisma.notes.findMany();
  return (
    <div>
      <h1>Notes</h1>
      <div>
      {notes && notes.length > 0 ? (
          notes.map((note : any) => (
            <Note key={note.id} note={note} />
          ))
        ) : (
          <li>No notes found</li>
        )}
        </div>
        <p className="credits">Done by aikooo7, <a href="https://github.com/aikooo7">github.</a></p>
    </div>
  );
}

function Note({ note }: any) {
  const {id, title, notes_content, createdAt} = note || {}
  const formattedDate = new Date(note.createdAt).toLocaleDateString();

  return (
    <Link href={`/notes/${id}`}>
    <div>
      <h3>{title}</h3>
      <h5>{notes_content}</h5>
      <p>{formattedDate}</p>
    </div>
    </Link>
  );

}