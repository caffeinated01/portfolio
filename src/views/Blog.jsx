import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../Components/utils/Reveal";

function Blog() {
  const misc = [
    {
      postName: "hello_world",
      date: "22/2/24",
      thumbnail: "/hello_world.jpeg",
      tags: ["misc."],
    },
  ];
  const achievements = [
    {
      postName: "the_young_catalyst",
      date: "16/9/2022",
      thumbnail: "/yc-1.jpg",
      tags: ["comp."],
    },
    {
      postName: "vjc_x_tp_hackathon",
      date: "1/6/23",
      thumbnail: "/vjcxtp-2.jpeg",
      tags: ["comp."],
    },
    {
      postName: "maze_master",
      date: "21/10/23",
      thumbnail: "/mm-1.jpg",
      tags: ["comp."],
    },
    {
      postName: "blåhaj_ctf",
      date: "2/12/23",
      thumbnail: "/blahaj-1.png",
      tags: ["comp."],
    },
    {
      postName: "hack@ac",
      date: "24/2/24",
      thumbnail: "/hac-1.png",
      tags: ["comp.", "howto"],
    },
  ];
  const projects = [];
  const howtos = [];
  const blogs = [misc, achievements, projects, howtos];
  return (
    <>
      <div className="px-5 py-10 flex flex-col gap-10 justify-center items-center min-h-[90vh]">
        <div className="max-w-[700px] grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {blogs.map((category) =>
            category.map((blog, idx) => (
              <div key={idx} className="rounded-lg p-5">
                <Link to={`/blog/${blog.postName}`}>
                  <h1 className="text-base text-secondary-light dark:text-secondary-dark font-inter">
                    {blog.date}
                  </h1>
                  <Reveal
                    component={
                      <img
                        src={blog.thumbnail}
                        className="rounded-md w-[300px] h-[200px] object-cover"
                      ></img>
                    }
                  />
                  <div className="flex flex-row gap-2 py-2 text-primary-light dark:text-primary-dark justify-between">
                    <span className="text-xl font-inter">
                      {blog.postName
                        .split("_")
                        .map((word) => word[0].toUpperCase() + word.slice(1))
                        .join(" ")}
                    </span>
                    {blog.tags.map((tag) => (
                      <span className="pt-[0.6px] text-secondary-light dark:text-secondary-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default Blog;
