import { Injectable } from '@nestjs/common';
import { CreateSkillInput } from './dto/create-skill.input';
import { UpdateSkillInput } from './dto/update-skill.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Skills } from '../generated/prisma/client';

@Injectable()
export class SkillService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSkillInput: CreateSkillInput): Promise<Skills> {
    const { name, profileID } = createSkillInput;
    return this.prisma.skills.create({
      data: {
        name,
        profile: {
          connect: {
            id: profileID,
          },
        },
      },
    });
  }

  findAll(): Promise<Skills[]> {
    return this.prisma.skills.findMany();
  }

  findOne(where: Prisma.SkillsWhereUniqueInput): Promise<Skills | null> {
    return this.prisma.skills.findUnique({
      where,
    });
  }

  update(
    id: number,
    updateSkillInput: UpdateSkillInput,
  ): Promise<Skills | null> {
    const { name, profileID } = updateSkillInput;
    return this.prisma.skills.update({
      where: { id },
      data: {
        name,
        profile: {
          connect: {
            id: profileID,
          },
        },
      },
    });
  }

  remove(where: Prisma.SkillsWhereUniqueInput): Promise<Skills | null> {
    return this.prisma.skills.delete({ where });
  }
}
