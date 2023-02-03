import { Counter } from "features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home";
import Posts from "Pages/Posts";
import Users from "Pages/Users";
import React from "react";
import PostDetail from "Pages/PostDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRoutes;
