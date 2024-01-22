import { useRouter } from "next/navigation";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: NextResponse) {
  const { title, notes_content } = await req.json();
  console.log(title, notes_content);
  const newNote = await prisma.notes.create({
    data: {
      title,
      notes_content,
    },
  });
  return Response.json({ newNote }, { status: 201 });
}
