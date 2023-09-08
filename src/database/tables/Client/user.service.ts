
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

  //Select an user
  public async findAll (): Promise<User[]> {

    var result = await this.usersRepository.find().then(value => result = value);
    console.log(result)
    return result;

    //await this.usersRepository.find().then(val => console.log(val));
    await this.usersRepository.find().then(val => val);
  }

  //Add a new user
  async addUser (user : UserModel) {
    this.usersRepository.insert(user);
  }




  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }


  async deleteUser (id : number) {

  }
}
