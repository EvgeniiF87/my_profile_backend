import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SkillEntity } from '../../skill/entities/skill.entity';
import { ExperienceEntity } from '../../experience/entities/experience.entity';

@ObjectType()
export class ProfileEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  telegram: string;

  @Field()
  location: string;

  @Field(() => [SkillEntity])
  skills: SkillEntity[];

  @Field(() => [ExperienceEntity])
  experience: ExperienceEntity[];
}
