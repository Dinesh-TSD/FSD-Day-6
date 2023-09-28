class person{
    constructor (uname,age,email){
        this.uname=uname;
        this.age=age;
        this.email=email;

    }
    getuname(){
    return this.name;
 }
    set changeage(newage){
        this.age=newage;
    }
}

 var a = new person("Dinesh","25","dinesh123@gmail.com");

a.changeage=24;
console.log(a.age);
 