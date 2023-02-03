import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-red-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Redux Tool Kit App</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to="/">
            <span className="mr-5 hover:text-gray-900">Home</span>
          </Link>
          <Link to="/counter">
            <span className="mr-5 hover:text-gray-900">Counter</span>
          </Link>
          <Link to="/posts">
            <span className="mr-5 hover:text-gray-900">Post</span>
          </Link>
          <Link to="/users">
            <span className="mr-5 hover:text-gray-900">User</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
