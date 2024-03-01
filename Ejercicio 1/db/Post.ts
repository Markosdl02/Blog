import mongoose from "npm:mongoose";
import {Post} from "../types.ts"

if(mongoose.connection.readyState==0){
    await mongoose.connect("mongodb+srv://Marcos:12345@nebrija-cluster.7yxmiyx.mongodb.net/PostsDB?retryWrites=true&w=majority");
}

const schema=new mongoose.Schema<Post>({

    title:String,
    author:String,
    content:String,

});

export default mongoose.model<Post>("Post",schema)
