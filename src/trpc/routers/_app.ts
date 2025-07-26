import { messagesRouter } from "@/modules/messages/server/procedures";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  messages: messagesRouter,
});

export type AppRouter = typeof appRouter;
