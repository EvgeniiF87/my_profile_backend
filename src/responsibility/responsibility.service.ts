import { Injectable } from '@nestjs/common';
import { CreateResponsibilityInput } from './dto/create-responsibility.input';
import { UpdateResponsibilityInput } from './dto/update-responsibility.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Responsibility } from '../generated/prisma/client';

@Injectable()
export class ResponsibilityService {
  constructor(private readonly prisma: PrismaService) {}

  create(
    createResponsibilityInput: CreateResponsibilityInput,
  ): Promise<Responsibility> {
    const { name, experienceID } = createResponsibilityInput;
    return this.prisma.responsibility.create({
      data: {
        name,
        experience: {
          connect: {
            id: experienceID,
          },
        },
      },
    });
  }

  findAll(): Promise<Responsibility[]> {
    return this.prisma.responsibility.findMany();
  }

  findOne(where: Prisma.ResponsibilityWhereUniqueInput) {
    return this.prisma.responsibility.findUnique({ where });
  }

  update(
    id: number,
    updateResponsibilityInput: UpdateResponsibilityInput,
  ): Promise<Responsibility | null> {
    const { name, experienceID } = updateResponsibilityInput;
    return this.prisma.responsibility.update({
      where: { id },
      data: {
        name,
        experience: {
          connect: {
            id: experienceID,
          },
        },
      },
    });
  }

  remove(
    where: Prisma.ResponsibilityWhereUniqueInput,
  ): Promise<Responsibility | null> {
    return this.prisma.responsibility.delete({ where });
  }
}
