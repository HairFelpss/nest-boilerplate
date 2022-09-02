import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const externalData: any[] = [
  {
    rig_name: 'Alice',
    system: 'alice@prisma.io',
    variables: [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        timestamp: new Date().toISOString(),
        name: 'https://slack.prisma.io',
        value: 'https://slack.prisma.io',
        uom: 'https://slack.prisma.io',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        timestamp: new Date().toISOString(),
        name: 'https://slack.prisma.io',
        value: 'https://slack.prisma.io',
        uom: 'https://slack.prisma.io',
      },
    ],
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of externalData) {
    const externalDataResponse = await prisma.externalData.create({
      data: {
        rig_name: data.rig_name,
        system: data.system,
      },
    });
    console.log(`Created with id: ${externalDataResponse.id}`);

    const variables = await Promise.all(
      data.variables.map((variable) => {
        return prisma.variable.create({
          data: {
            ...variable,
            externalDataId: externalDataResponse.id,
          },
        });
      }),
    );

    console.log({ variables });
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
