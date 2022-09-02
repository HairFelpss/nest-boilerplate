import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const externalData: any[] = [
  {
    rig_name: 'Alice',
    system: 'alice@prisma.io',
    variable: {
      create: [
        {
          id: 'sfadsfasfdsafasfasfa',
          createdAt: 423423,
          updatedAt: 234234234,
          timestamp: 0,
          name: 'https://slack.prisma.io',
          value: 'https://slack.prisma.io',
          uom: 'https://slack.prisma.io',
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of externalData) {
    const user = await prisma.externalData.create({
      data,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
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
