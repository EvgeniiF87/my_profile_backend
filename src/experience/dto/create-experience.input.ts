import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateExperienceInput {
  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field(() => Int)
  profileID: number;
}
