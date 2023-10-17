import {PrismaClient} from  "@prisma/client";

class Main{
    public prisma = new PrismaClient();

    main = async() =>{
        const newuser = await this.prisma.user.create({
            data: {
                name: "Maria",
                email: "Maria35@gmail.com",
                lastname: "Castaño"
            }
        })

        console.log(newuser);
        
    }
}

new Main().main()