import { PrismaClient } from '@prisma/client'
import prisma from '../../../lib/prisma'

async function GetNote(NoteId: number) {
  const notes = await prisma.notes.findUnique({
    where: {
      id: NoteId,
    },
  });
  return notes;
}
export default async function NotePage({ params }: any) {
  const note = await GetNote(parseInt(params.id));
  const formattedDate = new Date(note.createdAt).toLocaleDateString();
  return (
    <div>
      <h1>Note: {note.title}</h1>
      <div>
        <h3>{note.title}</h3>
        <h5>{note.notes_content}</h5>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}