import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateSkillInput {
  @Field()
  name: string;

  @Field(() => ID)
  profileID: number;
}
