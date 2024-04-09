import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const boardId = searchParams.get("boardId");
    const skip = searchParams.get("skip");
    const take = searchParams.get("take");
    // return Response.json({ boardId, skip, take });

    if (!boardId || !skip || !take) {
      return Response.json(
        { error: { message: "Fields are Missing!" } },
        { status: 400 }
      );
    }
    const board = prisma.board.findUniqueOrThrow({
      where: {
        id: boardId,
      },
    });

    const boardColumn = prisma.boardColumn.findMany({
      where: {
        boardId: boardId,
      },
    });

    const boardTicket = prisma.boardTicket.findMany({
      where: {
        boardId: boardId,
      },
      skip: Number(skip),
      take: Number(take)
    });

    const data = await Promise.all([board, boardColumn, boardTicket]);

    return Response.json(
      {
        data: {
          board: data[0],
          boardColumn: data[1],
          boardTicket: data[2],
        },
      },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return Response.json(
      { error: { message: "Something went wrong!" } },
      { status: 500 }
    );
  }
}
