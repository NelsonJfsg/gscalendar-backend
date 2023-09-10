
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

  //Verify user credentials.
  verifyUserCredentials = async (user : UserModel) : Promise<boolean>  => {
    
    //Atributes
    let thisUser : Promise<UserModel>;
    let status : boolean;

    //Get user by id
    thisUser = this.usersRepository.findOneBy({id : user.id});
    
    //Validate credentials
    await thisUser.then(item => {
      if(item){
        if(user.email == item.email && user.password == item.password){
          status = true;
        }else{
          status = false;
        }
      }else{
        status = false;
      }
    });

    return status;

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
