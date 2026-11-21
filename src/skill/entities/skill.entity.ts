import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProfileEntity } from '../../profile/entities/profile.entity';

@ObjectType()
export class SkillEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  profileID: number;

  @Field(() => ProfileEntity)
  profile: ProfileEntity;
}
