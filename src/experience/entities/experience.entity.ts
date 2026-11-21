import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { ResponsibilityEntity } from '../../responsibility/entities/responsibility.entity';

@ObjectType()
export class ExperienceEntity {
  @Field(() => ID)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field()
  period: string;

  @Field(() => Int)
  profileID: number;

  @Field(() => ProfileEntity)
  profile: ProfileEntity;

  @Field(() => [ResponsibilityEntity])
  responsibilities: ResponsibilityEntity[];
}
