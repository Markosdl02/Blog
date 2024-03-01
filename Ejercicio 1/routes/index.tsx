import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PostList from "../components/PostList.tsx"
import {Post } from "../types.ts";
import PostModel from "../db/Post.ts";

type Data = {
  posts: Array<Post>;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const posts = await PostModel.find();
    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <PostList
      posts={props.data.posts}
    />
  );
}
