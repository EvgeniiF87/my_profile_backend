import {
  Resolver,
  ResolveField,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
} from '@nestjs/graphql';
import { ExperienceService } from './experience.service';
import { ExperienceEntity } from './entities/experience.entity';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { Prisma } from '../generated/prisma/client';

@Resolver(() => ExperienceEntity)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Mutation(() => ExperienceEntity)
  createExperience(
    @Args('createExperienceInput') createExperienceInput: CreateExperienceInput,
  ) {
    return this.experienceService.create(createExperienceInput);
  }

  @Query(() => [ExperienceEntity], { name: 'experiences' })
  findAll() {
    return this.experienceService.findAll();
  }

  @Query(() => ExperienceEntity, { name: 'experience' })
  findOne(
    @Args('id', { type: () => Int }) where: Prisma.ExperienceWhereUniqueInput,
  ) {
    return this.experienceService.findOne(where);
  }

  @Mutation(() => ExperienceEntity)
  updateExperience(
    @Args('updateExperienceInput') updateExperienceInput: UpdateExperienceInput,
  ) {
    return this.experienceService.update(
      updateExperienceInput.id,
      updateExperienceInput,
    );
  }

  @Mutation(() => ExperienceEntity)
  removeExperience(
    @Args('id', { type: () => Int }) where: Prisma.ExperienceWhereUniqueInput,
  ) {
    return this.experienceService.remove(where);
  }

  @ResolveField()
  period(@Parent() experience: ExperienceEntity): string {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      year: 'numeric',
    });

    const start = formatter.format(experience.startDate);

    const end = experience.endDate
      ? formatter.format(experience.endDate)
      : 'н.в.';

    return `${start} - ${end}`;
  }
}
