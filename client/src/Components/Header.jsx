
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { VscMenu, VscClose } from "react-icons/vsc";
import { FaInstagram, FaLinkedinIn, FaThreads } from "react-icons/fa6";
import { useSelector } from "react-redux";

const links = [
  {
    to: "/",
    title: "HOME",
  },
  {
    to: "/about",
    title: "ABOUT US",
  },
  {
    to: "https://www.linkedin.com/in/prabhat-singh-10a134255/",
    title: <FaLinkedinIn />,
  },
  {
    to: "https://www.threads.net/@_frontend.ui_",
    title: <FaThreads />,
  },
  {
    to: "https://www.instagram.com/_frontend.ui_",
    title: <FaInstagram />,
  },
];

export default function Header() {
  const [nav, setNav] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="w-[100%] text-[14px] sticky top-0 backdrop-blur-2xl z-50">
      <header className="w-full px-4 lg:w-[85%] mx-auto h-[70px] flex justify-between items-center text-neutral-900">
        {/*  desktop view */}
        <NavLink to="/" className="flex space-x-2 items-center">
          <h1 className="text-white bg-red-500 font-bold text-2xl px-2.5 py-.5 rounded-md ">
            L
          </h1>
          <h1 className="flex flex-col font-extrabold text-[16px] tracking-wide lg:tracking-normal">
            LATEST <span className="-mt-2 text-red-500">TECH BLOGS</span>
          </h1>
        </NavLink>
        <div className="hidden lg:flex items-center font-medium text-[14px] justify-center space-x-8 tracking-wide ">
          {links.map(({ to, title, target }) => (
            <NavLink
              to={to}
              key={title}
              target={target}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-neutral-600 hover:text-red-500"
              }
            >
              {title}
            </NavLink>
          ))}

          {currentUser ? (
            <>
              <NavLink to={'/dashboard?tab=profile'} className="block text-sm uppercase text-neutral-600">{currentUser.username}</NavLink>
            </>
          ) : (
            <NavLink
              to="/sign-in"
              className="bg-red-500 w-fit px-6 text-white py-3 rounded-md hover:bg-red-400"
            >
              SIGN IN
            </NavLink>
          )}
        </div>

        {/* Mobile view */}
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer block lg:hidden"
        >
          {nav ? (
            <VscClose className="w-10 h-8 p-1 text-red-500 " size={20} />
          ) : (
            <VscMenu className="w-10 h-8 p-1 text-red-500 " size={20} />
          )}

          {nav && (
            <div
              className={
                nav
                  ? "fixed flex flex-col text-[12px] space-y-4 top-[70px] h-screen right-0 w-[80%] p-4 border-t bg-white shadow-sm"
                  : "fixed left-[-100%]"
              }
            >
              {links.map(({ to, title }) => (
                <NavLink
                  onClick={() => setNav(!nav)}
                  to={to}
                  key={title}
                  smooth
                  duration={500}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-500 px-4 py-2.5 text-white rounded-md shadow-sm"
                      : " hover:bg-red-500 hover:text-white p-2.5 bg-neutral-50 rounded-md border"
                  }
                >
                  {title}
                </NavLink>
              ))}

              {currentUser ? (
                <>
                  <NavLink to={'/dashboard?tab=profile'} className=" text-[16px] bg-red-500 px-3 py-2 text-white rounded-md w-fit uppercase ">
                    {currentUser.username} 
                  </NavLink>
                </>
              ) : (
                <NavLink
                  to="/sign-in"
                  className="bg-red-500 w-fit px-6 text-white py-3 rounded-md hover:bg-red-400"
                >
                  SIGN IN
                </NavLink>
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}