import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateResponsibilityInput {
  @Field()
  name: string;

  @Field(() => Int)
  experienceID: number;
}
