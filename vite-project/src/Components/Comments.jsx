import React, { useEffect, useState } from "react";
import axios from "axios";

export function Comments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                setComments(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching comments:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-2xl text-white">Loading...</div>;

    return (
        <div className="text-white p-6">
            <h1 className="text-4xl mb-6 text-white">Comments</h1>
            <ul className="space-y-4">
                {comments.map(comment => (
                    <li key={comment.id} className="border p-4 rounded-lg bg-gray-800">
                        <h2 className="text-xl font-bold">ID: {comment.id} | PostID: {comment.postId}</h2>
                        <h3 className="text-lg text-[#4E9F0D] font-semibold mt-2">{comment.name}</h3>
                        <p className="mt-2 text-gray-300">{comment.body}</p>
                        <p className="mt-2 text-blue-400">✉ {comment.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
