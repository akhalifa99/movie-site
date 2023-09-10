import { Injectable } from "@angular/core";
import * as users from '../../assets/users.json';

// import * as fs from 'fs';
// import * as csv from 'csv-parser';
// var fs = require('file-system');

@Injectable({providedIn: 'root'})
export class LoginService{

    user:any = users;
    logged:boolean=false;
    
    constructor(){}
    

     login(email:string, passwd:string):boolean{
    //    const users =  await this.readCSVFile("./usersx.csv");
    //    for(let i=0;i<users.length;i++){
    //     let credntials = users[i].split(",",2);
    //     if(email===credntials[0] && passwd===credntials[1]){
    //         return true;
    //     }
    //    }
    //    return false;
    for(let i=0;i<Object.keys(users).length-2;i++){
        if(email===users[i].email&&passwd===users[i].password){
            this.logged=true;
            localStorage.setItem('logged',''+this.logged)
            return true
        }}
        this.logged=false;
        localStorage.setItem('logged',''+this.logged)
        return false
    }
    
    
    // async readCSVFile(filePath: string): Promise<any[]> {
        
    //     const results: any[] = [];
    //     return await new Promise((resolve, reject) => {
    //       fs.createReadStream(filePath)
    //         .pipe(csv())
    //         .on('data', (data) => results.push(data))
    //         .on('end', () => resolve(results))
    //         .on('error', (error) => reject(error));
    //     });
    // }
}