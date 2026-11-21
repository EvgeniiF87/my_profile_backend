import { Resolver, Query } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { ProfileEntity } from './entities/profile.entity';

@Resolver(() => ProfileEntity)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => [ProfileEntity], { name: 'profile' })
  findProfile() {
    return this.profileService.findProfile();
  }
}
