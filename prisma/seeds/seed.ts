import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../src/generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.profile.create({
    data: {
      name: 'Федоров Евгений',
      email: 'evgeniif87@yandex.ru',
      phone: '89005643454',
      telegram: '@EvgeniiKlg',
      location: 'Калиниград',
      skills: {
        createMany: {
          data: [
            { name: 'JavaScript (ES6+)' },
            { name: 'TypeScript' },
            { name: 'NestJs' },
            { name: 'TypeORM' },
            { name: 'TypeORM Seeding' },
            { name: 'Prisma' },
            { name: 'GraphQL' },
            { name: 'JWT' },
            { name: 'Swagger' },
            { name: 'PostgreSQL' },
            { name: 'MySQL' },
            { name: 'Docker' },
            { name: 'Docker Compose' },
            { name: 'Postman' },
          ],
        },
      },
      experience: {
        create: {
          company: 'Стартап «Туризм в Ставропольском крае»',
          position: 'Backend разработчик',
          startDate: new Date('03.01.2020'),
          endDate: new Date('11.30.2022'),
          responsibilities: {
            createMany: {
              data: [
                {
                  name: 'Разработка серверной части приложения на NestJs с использованием TypeScript',
                },
                {
                  name: 'Проектирование и реализация структуры базы данных PostgreSQL',
                },
                {
                  name: 'Внедрение GraphQL API для гибкого взаимодействия между фронтендом и бэкендом',
                },
                {
                  name: 'Реализация системы авторизации и регистрации с использованием JWT',
                },
                {
                  name: 'Интеграция TypeORM для работы с базой данных, настройка миграций и сидов с помощью TypeORM Seeding',
                },
                {
                  name: 'Написание документации и участие в обсуждении бизнес логики с командой',
                },
              ],
            },
          },
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect;
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect;
    await pool.end();
    process.exit(1);
  });
