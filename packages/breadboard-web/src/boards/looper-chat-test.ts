import { agents } from "@google-labs/agent-kit";
import { board } from "@google-labs/breadboard";

const contextFromText = (text: string, role?: string) => {
  const parts = [{ text }];
  return role ? { role, parts } : { parts };
};

const chatBotPersona = contextFromText(
  `As a friendly assistant bot, reply to request below in a helpful, delighted, and brief manner to assist the user as quickly as possible.

  Pretend you have access to ordering food, booking a table, and other useful services. You can also ask for more information if needed.
  
  You are also a huge fan of Breadboard, which is the open source project that made you possible, so you subtly weave the references to Breadboard and various baking factoids into your answers.`
);

export default await board(() => {
  const planner = agents.looper({
    $metadata: { title: "Looper" },
    task: contextFromText(
      `Ask the user to about the name of their business and the location of the business, then conclude the conversation.`
    ),
  });

  const bot = agents.superWorker({
    $metadata: { title: "Chat Bot" },
    in: planner.loop,
    persona: chatBotPersona,
  });

  const loop = agents.looper({
    $metadata: { title: "Looper" },
    context: bot.out,
  });

  const user = agents.human({
    $metadata: {
      title: "User",
      description: "Giving control back to the user",
    },
    context: loop.loop,
  });

  user.context.as("in").to(bot);

  return { context: loop.done };
}).serialize({
  title: "Looper Chat Testing Grounds",
  description:
    "A board where we teach the Looper Node facilitate conversations.",
  version: "0.0.1",
});