import React from "react";
import { blogsData } from "../../data/blogs-data";
import { useTitle } from "../../hooks/useTitle";

export function Blogs() {
    useTitle("Blogs");
  return (
    <div>
      <h2 className="text-4xl mt-4 mb-8">My blogs</h2>
      <ul>
        {blogsData.map((item) => (
          <li key={item.id} className="border rounded-xl p-8 my-4 shadow-md">
            <h3 className="text-2xl">{item.name}</h3>
            <small className="text-md text-gray-400 block my-2">{item.date}</small>
           
            <a href={item.read} className=" px-4 rounded-xl my-16 bg-orange-500 text-white text-xl hover:bg-orange-600">Read</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
