import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExperienceEntity } from '../../experience/entities/experience.entity';

@ObjectType()
export class ResponsibilityEntity {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  experienceID: number;

  @Field(() => ExperienceEntity)
  experience: ExperienceEntity;
}
