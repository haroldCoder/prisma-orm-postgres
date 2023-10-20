import {Post} from "./types"
import Main from "."

class Posts extends Main{
    createPost = async(post: Post) =>{
        const postnew = await this.prisma.post.create({
            data: {
                title: post.title,
                content: post.content,
                authorId: post.authorId
            }
        })
        console.log(postnew);
    }
}

new Posts().viewAllUsers()