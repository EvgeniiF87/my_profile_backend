import { CreateResponsibilityInput } from './create-responsibility.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResponsibilityInput extends PartialType(
  CreateResponsibilityInput,
) {
  @Field(() => ID)
  id: number;
}
