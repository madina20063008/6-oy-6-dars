

import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Posts } from "./Posts";
import { Todos } from "./Todos";
import { Comments } from "./Comments";

export function Menu() {
    return (
        <div className="p-10 text-white bg-black min-h-screen">
            <nav className="mb-6">
            <ul className="flex gap-[20px] justify-center">
                <li><NavLink to="/menu/posts" className="text-[#4E9F0D] text-[35px] flex justify-center align-center">Posts</NavLink></li>
                 <li><NavLink to="/menu/todos" className="text-[#4E9F0D] text-[35px] flex justify-center align-cente">Todos</NavLink></li>
                <li><NavLink to="/menu/comments" className="text-[#4E9F0D] text-[35px] flex justify-center align-cente">Comments</NavLink></li>
               </ul>
            </nav>

            <Routes>
                <Route path="posts" element={<Posts />} />
                <Route path="todos" element={<Todos/>} />
                <Route path="comments" element={<Comments/>} />
            </Routes>
        </div>
    );
}

