import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
    @Post("/auth/verify")
    verifyCredentials (@Body() user : UserModel) : Promise<boolean> {
        console.log("Asd")
        return this.userService.verifyUserCredentials(user);
    }


}
