import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

async function GetNote(NoteId: string) {
  try {
    const res = await sql`SELECT * from users`
    return NextResponse.json({ res }, { status: 200 }).json()
  } catch(error) {
    return NextResponse.json({ error }, {status: 500}).json()
}
}

export default async function IdPage({ params }: any) {
    let note = await GetNote(params.id);
  return (
    <div>
      <h1>Note: {note}</h1>
      <div>
      <h2>{note.title}</h2>
        <h3>{note.content}</h3>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
