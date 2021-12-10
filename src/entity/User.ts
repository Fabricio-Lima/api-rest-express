import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    accountNumber: number;

    @Column()
    accountDigit: number;

    @Column()
    wallet: number;

    @Column()
    email: string;

    @Column()
    password: string;

}
