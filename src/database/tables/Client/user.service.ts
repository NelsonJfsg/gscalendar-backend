
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async findAll (): Promise<User[]> {
    await this.usersRepository.find().then(val => console.log(val));
    return await this.usersRepository.find();
    
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async addUser (user : UserModel) {
    this.usersRepository.insert(user);
  }

  async deleteUser (id : number) {

  }
}
