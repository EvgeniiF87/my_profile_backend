import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findProfile() {
    return this.prisma.profile.findMany({
      include: {
        skills: true,
        experience: {
          include: {
            responsibilities: true,
          },
        },
      },
    });
  }
}
