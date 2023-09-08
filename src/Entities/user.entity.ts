import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;
  
  @Column()
  fatherSurname: string;
  
  @Column()
  motherSurname: string;
  
  @Column()
  email : string;
  
  @Column()
  password : string;

}
