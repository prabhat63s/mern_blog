import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaThreads } from "react-icons/fa6";

export default function FooterCom() {
  return (
    <footer className="w-[100%] border-t text-[12px] lg:text-[14px] relative bottom-0 bg-neutral-900">
      <div className="w-[85%] mx-auto gap-1 h-24 flex flex-col justify-center items-center text-white lg:tracking-wider">
        <p>
          © {new Date().getFullYear()} Latest Tech blog | All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-2 text-neutral-100">
          <NavLink to="https://www.linkedin.com/in/prabhat-singh-10a134255/">
            <FaLinkedinIn size={16}  />
          </NavLink>
          <NavLink to="https://www.threads.net/@_frontend.ui_">
            <FaThreads size={16}  />
          </NavLink>
          <NavLink to="https://www.instagram.com/_frontend.ui_">
            <FaInstagram size={16}  />
          </NavLink>
          <NavLink to="/"></NavLink>
        </div>
      </div>
    </footer>
  );
}
