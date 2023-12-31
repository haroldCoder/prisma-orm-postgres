import {PrismaClient} from  "@prisma/client";
import {Post, User} from "./types"

export default class Main{
    public prisma = new PrismaClient();

    createUser = async(user: User) =>{
        const newuser = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                lastname: user.lastname
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

    deleteUser = async(id: number, name?: string) =>{
        let user;
        if(name)
            user = await this.prisma.user.delete({where: {Id: id, OR: [{name: name}]}});
        else
            user = await this.prisma.user.delete({where: {Id: id}});
        console.log(user);
        
    }

    updateUser = async(user: User) =>{
        const userm = await this.prisma.user.update({
            where: {Id: user.Id},
            data: {
                name: user.name,
                email: user.email,
                lastname: user.lastname
            }}
        );
        console.log(userm);
    }

    upsertUser = async(user: User) =>{
        const userm = await this.prisma.user.upsert({
            create: {
                name: user.name,
                email: user.email,
                lastname: user.lastname
            },
            update: {
                name: user.name,
                email: user.email,
                lastname: user.lastname
            },
            where: {
                Id: user.Id
            }
        })
    }

    conectPostWithUsers = async(userp: User, post: Post) =>{
        const user = await this.prisma.user.create({
            data: {
                name: userp.name,
                email: userp.email,
                lastname: userp.lastname,
                post: {
                    create: {
                        title: post.title,
                        content: post.content,

                    }
                }
            }
        })

        console.log(user);
        
    }

    viewUsersWithPosts = async() =>{
        const users = await this.prisma.user.findMany({
            include: {
                post: true
            }
        });

        users.map((e)=>{
            console.log(e);
        })
        
    }
}

new Main().viewUsersWithPosts();