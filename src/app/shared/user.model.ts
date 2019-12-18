export class User{

    public username: string;
    public email: string;
    public gender: string;
    public favoriteNumber: number;
    public birthday: Date;
    public numberOfreinds: number;

    constructor(username: string, email: string, gender: string, favoriteNumbe: number, birthday: Date, numberOfreinds : number){
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.favoriteNumber=favoriteNumbe; 
        this.birthday= birthday;
        this.numberOfreinds = numberOfreinds;
    }


}