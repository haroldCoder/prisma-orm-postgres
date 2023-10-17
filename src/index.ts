import {PrismaClient} from  "@prisma/client";

class Main{
    public prisma = new PrismaClient();

    createUser = async() =>{
        const newuser = await this.prisma.user.create({
            data: {
                name: "Maria",
                email: "Maria35@gmail.com",
                lastname: "Castaño"
            }
        })

        console.log(newuser);   
    }

    viewAllUsers = async() =>{
        const users = await this.prisma.user.findMany();
        console.log(users);
        
    } 

    viewUserByName = async(name: string) =>{
        const user = await this.prisma.user.findFirst({where: {name: name}});
        console.log(user);
    }
}

new Main().viewUserByName("Maria")