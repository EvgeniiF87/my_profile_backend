import { Module } from '@nestjs/common';
import { ResponsibilityService } from './responsibility.service';
import { ResponsibilityResolver } from './responsibility.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ResponsibilityResolver, ResponsibilityService],
})
export class ResponsibilityModule {}
