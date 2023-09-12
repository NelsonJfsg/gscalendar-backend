
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  //CRUD

  //CREATE
  
  //Add a new user
  async addUser (user : UserModel) : Promise<boolean>{
    

    if(await this.emailExists(user)){
      console.log("Ya existe el email")
      
    }else{

      let value = this.usersRepository.insert(user);
      let status : boolean;
  
      await value.then(result => {
        if(result.identifiers.at(0) != null){
          status = true;
        }else{
          status = false;
        }
      });
      return status;
    }

   
  }

  //READ

  public async findAll (): Promise<User[]> {

    var result = await this.usersRepository.find().then(value => result = value);
    console.log(result)
    return result;

  }

  //Get user by id
  private getUserById = (user : UserModel) : Promise<UserModel>=> {
    
    return this.usersRepository.findOneBy({id : user.id});
    
  }

  //UPDATE
  //DELETE

  //Verify user credentials.
  verifyUserCredentials = async (user : UserModel) : Promise<boolean>  => {
    
    //Atributes
    let status : boolean;

    //Get user by id
    let dbUser = this.getUserById(user);

    //Validate credentials
    await dbUser.then(item => {
      if(item){
        if(user.email == item.email && user.password == item.password){
          console.log("Credenciales correctas.");
          status = true;
        }else{
          console.log("Credenciales incorrectas.");
          status = false;
        }
      }else{
        console.log("Usuario no encontrado");
        status = false;
      }
    });

    return status;

  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  //find by email
  emailExists  = async (user : UserModel) : Promise<boolean> => {

    let value = await this.usersRepository.findOneBy({email : user.email});

    if(value){
      return true;

    }else{
      return false;
    }

  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }


  async deleteUser (id : number) {

  }
}
