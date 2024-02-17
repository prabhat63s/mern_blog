import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
// import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <>
      {/* trending Blog  */}
      <div className="h-80 flex flex-col items-start justify-center bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-800 text-white">
        <div className="px-4 space-y-4 w-full lg:w-[85%]  mx-auto flex  flex-col tracking-wide">
          <h1 className="hover:text-red-500 text-3xl lg:text-5xl font-semibold lg:w-[70%] leading-10">
            {post && post.title}
          </h1>
          <span className="h-1 w-20 bg-red-500"></span>
          <i className="text-sm">Published on {post && new Date(post.createdAt).toLocaleDateString()}</i>

          <i className="text-sm">
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </i>
        </div>
      </div>
      <div className="p-4 flex flex-col mt-4 items-center justify-center text-black">
        <img
          src={post && post.image}
          alt={post && post.title}
          className=" max-h-[300px] w-full lg:w-[600px] object-cover"
        />

        <div
          className="p-3 max-w-7xl mx-auto w-full post-content"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>

        <div className="max-w-4xl mx-auto w-full">
          {/* <CallToAction /> */}
        </div>

        <CommentSection postId={post._id} />

        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-black font-semibold text-center">
              Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentPosts &&
                recentPosts.map((post) => (
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
        </div>
      </div>
    </>
  );
}
