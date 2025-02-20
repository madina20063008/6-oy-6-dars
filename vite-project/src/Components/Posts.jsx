

import React, { useEffect, useState } from "react";
import axios from "axios";

export function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-2xl text-white">Loading...</div>;

    return (
        <div className="text-white p-6">
            <h1 className="text-4xl mb-6 text-white">Posts</h1>
            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="border p-4 rounded-lg bg-gray-800">
                        <h2 className="text-xl font-bold">ID: {post.id} | UserID: {post.userId}</h2>
                        <h3 className="text-lg text-[#4E9F0D] font-semibold mt-2">{post.title}</h3>
                        <p className="mt-2">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
