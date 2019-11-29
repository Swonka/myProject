export class User{

    public username: string;
    public email: string;
    public gender: string;
    public favoriteNumber: number;
    public birthday: Date;

    constructor(username: string, email: string, gender: string, favoriteNumbe: number, birthday: Date){
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.favoriteNumber=favoriteNumbe; 
        this.birthday= birthday;
    }


}