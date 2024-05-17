import { Injectable } from '@nestjs/common';
import { UserAuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User> 
  ) {}

  signIn(userAuthDto: UserAuthDto) {
    const user = this.userRepository.findOne({
      where: {
        email: ILike(userAuthDto.email)
      }
    })

    if(!user) {
      alert('Usuario no existe');
    }

    return 'This action adds a new auth';
  }
}
