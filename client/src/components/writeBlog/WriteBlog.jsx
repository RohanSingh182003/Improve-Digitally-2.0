import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ImagePlaceholderIcon from "../../assets/imgPlaceholderIcon.png";
import { MiniBlogPosts } from "../blog/LatestPosts";
import AppContext from "../../context/AppContext";

const WriteBlog = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  // decleare state variables
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "" || file === "") {
      return toast.warn("please fill all the fields.");
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
      setTimeout(() => {
        toast.warn("please login first!");
      }, 500);
    }
  }, []);

  return (
    <section>
      <div className="h-32 md:h-64 bg-gray-900 text-gray-100 md:px-32 grid place-items-center md:place-items-start">
        <p className="text-4xl font-extrabold text-center md:text-start md:mt-24">
          Write Blog
        </p>
      </div>
      {/* contact details */}
      <div className="grid md:grid-cols-2 md:px-24">
        {/* left side section  */}
        <div className="pr-6 px-6 md:px-0">
          <p className="text-gray-700 text-center mt-14 text-2xl font-bold">
            Your recent <span className="text-orange-500">Blog posts</span>
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-orange-500 text-center mt-6"></div>
          </div>
          {/* recent posts container */}
          <div className="mt-8">
            <MiniBlogPosts />
            <MiniBlogPosts />
            <MiniBlogPosts />
          </div>
          <div className="w-full flex justify-end px-16">
            <p className="text-sm text-blue-500 font-light hover:font-medium hover:underline cursor-pointer">
              view all posts
            </p>
          </div>
        </div>
        {/* right side section  */}
        <div className="w-full rounded-md shadow-xl md:-mt-20 bg-white">
          <div className="grid place-items-center mt-6">
            <p className="text-2xl font-bold text-gray-700 pb-6">
              Write a <span className="text-orange-500">Blog</span>
            </p>
            <div className="w-10 h-1 bg-orange-500"></div>
          </div>
          {/* form section */}
          <form onSubmit={handleSubmit} className="p-6 mt-12">
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Blog Title*"
              className="border-b-2 focus:outline-none p-2 w-full mt-4"
            />
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="query"
              id="query"
              cols="30"
              rows="10"
              className="w-full mt-4 border-b-2 focus:outline-none p-2"
              placeholder="Blog Content...*"
            ></textarea>
            <label
              htmlFor="img"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <img
                src={ImagePlaceholderIcon}
                alt="ImagePlaceholderIcon"
                className="w-20"
              />
              <p className="font-light text-gray-600">Select an image</p>
            </label>
            <input
              required
              value={file}
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="img"
              className="hidden"
            />
            <button
              type="submit"
              className="my-4 px-8 py-4 rounded-3xl bg-gray-700 text-white hover:bg-orange-500 hover:shadow-xl transition-all duration-200 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WriteBlog;
