import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/Entities/user.entity';
import { UsersService } from './user.service';

@Controller("user")
export class UserController {

    constructor(private userService : UsersService){
        
    }

    //CRUD
    @Get("/getAllUser")
    getAllUsers() : Promise<User[]>{
        return this.userService.findAll();
    }

    @Post("/addUser")
    insertUser (@Body() user) {

        return this.userService.addUser(user);

    }

    //
    @Get("/exists")
    findByEmail (@Body() user : UserModel) : Promise<boolean> {
        return this.userService.emailExists(user);
    }




    //

    //Auth
    @Get("/auth/verify")
    verifyCredentials (@Body() user : UserModel) : Promise<boolean> {

        return this.userService.verifyUserCredentials(user);
    }


}
