import { Injectable } from '@nestjs/common';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { PrismaService } from '../prisma/prisma.service';
import { Experience, Prisma } from '../generated/prisma/client';

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) {}

  create(createExperienceInput: CreateExperienceInput): Promise<Experience> {
    const { company, position, startDate, endDate, profileID } =
      createExperienceInput;
    return this.prisma.experience.create({
      data: {
        company,
        position,
        startDate,
        endDate: endDate || '',
        profile: {
          connect: {
            id: profileID,
          },
        },
      },
    });
  }

  findAll(): Promise<Experience[]> {
    return this.prisma.experience.findMany();
  }

  findOne(
    where: Prisma.ExperienceWhereUniqueInput,
  ): Promise<Experience | null> {
    return this.prisma.experience.findUnique({ where });
  }

  update(
    id: number,
    updateExperienceInput: UpdateExperienceInput,
  ): Promise<Experience | null> {
    const { company, position, startDate, endDate, profileID } =
      updateExperienceInput;
    return this.prisma.experience.update({
      where: { id },
      data: {
        company,
        position,
        startDate,
        endDate,
        profile: {
          connect: {
            id: profileID,
          },
        },
      },
    });
  }

  remove(where: Prisma.ExperienceWhereUniqueInput): Promise<Experience | null> {
    return this.prisma.experience.delete({ where });
  }
}
