import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px]">
              Welcome to my Blog!
            </h1>
            <p className="text-[20px] font-normal leading-[30px] tracking-[2%] md:font-normal md:text-[24px] md:leading-[36px]">
              This is a blog where I write about my thoughts, ideas, and things
              I find interesting. I hope you enjoy reading my posts.
            </p>
            <Button pill>
              <Link
                to="/search"
                className="text-xs sm:text-sm text-white font-bold hover:underline"
              >
                View all posts
              </Link>
            </Button>
          </div>

          <div className="p-3 bg-amber-100 dark:bg-slate-700">
            <CallToAction />
          </div>
        </div>
      </section>
      
      {posts && posts.length > 0 && (
        <section className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="text-center font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]">
            Recent Posts
          </h2>
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
