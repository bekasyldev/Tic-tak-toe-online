import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  const newGame = await prisma.game.create({
    data: {
      name: "Game1",
    },
  });
  console.log(newGame);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
