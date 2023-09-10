import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/Entities/user.entity';
import { UsersService } from 'src/database/tables/Client/user.service';

@Controller("user")
export class UserController {

    constructor(private userService : UsersService){
        
    }

    //CRUD
    @Get()
    getAllUsers() : Promise<User[]>{
        return this.userService.findAll();
    }

    @Post("/addUser")
    insertUser(@Body() user) : void {
        this.userService.addUser(user);
    }
    //

    //Auth
    @Get("/auth/verify")
    getUserById (@Body() user : UserModel) : Promise<boolean> {

        return this.userService.verifyUserCredentials(user);
    }


}
