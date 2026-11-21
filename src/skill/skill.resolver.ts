import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { SkillEntity } from './entities/skill.entity';
import { CreateSkillInput } from './dto/create-skill.input';
import { UpdateSkillInput } from './dto/update-skill.input';
import { Prisma } from '../generated/prisma/client';

@Resolver(() => SkillEntity)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Mutation(() => SkillEntity)
  createSkill(@Args('createSkillInput') createSkillInput: CreateSkillInput) {
    return this.skillService.create(createSkillInput);
  }

  @Query(() => [SkillEntity], { name: 'skills' })
  findAll() {
    return this.skillService.findAll();
  }

  @Query(() => SkillEntity, { name: 'skill' })
  findOne(@Args('id', { type: () => Int }) id: Prisma.SkillsWhereUniqueInput) {
    return this.skillService.findOne(id);
  }

  @Mutation(() => SkillEntity)
  updateSkill(@Args('updateSkillInput') updateSkillInput: UpdateSkillInput) {
    return this.skillService.update(updateSkillInput.id, updateSkillInput);
  }

  @Mutation(() => SkillEntity)
  removeSkill(
    @Args('id', { type: () => Int }) where: Prisma.SkillsWhereUniqueInput,
  ) {
    return this.skillService.remove(where);
  }
}
