import Link from 'next/link';
import styles from './Notes.module.css';

async function FetchNotes() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
    {cache: 'no-store'}
  );
  const json_data = await res.json();
  return json_data?.items as any[];
}

export default async function NotesPage() {
  const notes = await FetchNotes();
  return (
    <div className="NotesWelcome">
      <h1>Welcome to your notes app</h1>
      <p>Hope you enjoy it!</p>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h3>{content}</h3>
        <p>{created}</p>
      </div>
    </Link>
  );
}
