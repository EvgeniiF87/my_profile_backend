import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResponsibilityService } from './responsibility.service';
import { ResponsibilityEntity } from './entities/responsibility.entity';
import { CreateResponsibilityInput } from './dto/create-responsibility.input';
import { UpdateResponsibilityInput } from './dto/update-responsibility.input';
import { Prisma } from '../generated/prisma/client';

@Resolver(() => ResponsibilityEntity)
export class ResponsibilityResolver {
  constructor(private readonly responsibilityService: ResponsibilityService) {}

  @Mutation(() => ResponsibilityEntity)
  createResponsibility(
    @Args('createResponsibilityInput')
    createResponsibilityInput: CreateResponsibilityInput,
  ) {
    return this.responsibilityService.create(createResponsibilityInput);
  }

  @Query(() => [ResponsibilityEntity], { name: 'responsibilities' })
  findAll() {
    return this.responsibilityService.findAll();
  }

  @Query(() => ResponsibilityEntity, { name: 'responsibility' })
  findOne(
    @Args('id', { type: () => Int })
    where: Prisma.ResponsibilityWhereUniqueInput,
  ) {
    return this.responsibilityService.findOne(where);
  }

  @Mutation(() => ResponsibilityEntity)
  updateResponsibility(
    @Args('updateResponsibilityInput')
    updateResponsibilityInput: UpdateResponsibilityInput,
  ) {
    return this.responsibilityService.update(
      updateResponsibilityInput.id,
      updateResponsibilityInput,
    );
  }

  @Mutation(() => ResponsibilityEntity)
  removeResponsibility(
    @Args('id', { type: () => Int })
    where: Prisma.ResponsibilityWhereUniqueInput,
  ) {
    return this.responsibilityService.remove(where);
  }
}
