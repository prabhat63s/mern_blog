import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="h-96 flex flex-col items-center justify-center bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-800 text-white">
        <div className="px-4 space-y-4 lg:w-[85%] mx-auto flex flex-col tracking-wide">
          <h1 className=" text-3xl lg:text-5xl font-semibold lg:w-[70%] leading-10">
            Welcome to Latest Tech Blog...
          </h1>
          <p>Here you wil get information about latest technology and news.</p>
          <span className="h-1 w-20 bg-red-500"></span>
          <NavLink
            to={"/search"}
            className="border w-fit p-2.5 rounded-md hover:bg-red-500"
          >
            All Blogs
          </NavLink>
        </div>
      </div>
      <div className="pb-5 flex">
        <div className="max-w-6xl mx-auto p-3">
          <div>
            <h1 className="text-3xl font font-semibold text-center my-7">
              About Latest Tech  Blog
            </h1>
            <div className="text-md text-gray-500 flex flex-col gap-6">
              <p>
                Welcome to Latest Tech Blog! This blog was created by Sahand
                Ghavidel as a personal project to share his thoughts and ideas
                with the world. Sahand is a passionate developer who loves to
                write about technology, coding, and everything in between.
              </p>

              <p>
                On this blog, you will find weekly articles and tutorials on
                topics such as web development, software engineering, and
                programming languages. Sahand is always learning and exploring
                new technologies, so be sure to check back often for new
                content!
              </p>

              <p>
                We encourage you to leave comments on our posts and engage with
                other readers. You can like other peoples comments and reply to
                them as well. We believe that a community of learners can help
                each other grow and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
