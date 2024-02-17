import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

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
    <div>
      <div className="h-80 flex flex-col items-center justify-center bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-800 text-white">
        <div className="px-4 w-full space-y-4 lg:w-[85%] mx-auto flex flex-col tracking-wide">
          <h1 className=" text-3xl lg:text-5xl font-semibold lg:w-[70%] leading-10">
            Welcome to Latest Tech Blog...
          </h1>
          <p>Here you wil get information about latest technology and news.</p>
          <span className="h-1 w-20 bg-red-500"></span>
          <NavLink  to={"/search"} className="border w-fit p-2.5 rounded-md hover:bg-red-500">
            All Blogs
          </NavLink>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 ">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-black font-semibold text-center">
              Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg mt-2 text-red-500 hover:text-red-400 hover:font-semibold text-center"
            >
              View all blogs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
