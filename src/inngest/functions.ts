import { createAgent, gemini } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "summarizer",
      system: "You are an expert Next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: gemini({ model: 'gemini-2.0-flash' }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );

    return { output };
  }
);
