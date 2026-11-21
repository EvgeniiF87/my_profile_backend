import { CreateExperienceInput } from './create-experience.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExperienceInput extends PartialType(CreateExperienceInput) {
  @Field(() => ID)
  id: number;
}
