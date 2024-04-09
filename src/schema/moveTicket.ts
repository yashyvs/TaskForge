import { z } from "zod";

export const schema = z.object({
  ticketId: z.string(),
  boardId: z.string(),
  position: z.number(),
  boardColumnId: z.string(),
});
