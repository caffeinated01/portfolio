import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../Components/utils/Reveal";

function Blog() {
  const misc = [
    {
      postName: "hello_world",
      date: "22/2/24",
      thumbnail: "/hello_world.jpeg",
    },
  ];
  const achievements = [
    {
      postName: "the_young_catalyst",
      date: "22/2/24",
      thumbnail: "/yc-1.jpg",
    },
    {
      postName: "vjc_x_tp_hackathon",
      date: "22/2/24",
      thumbnail: "/vjcxtp-2.jpeg",
    },
  ];
  const projects = [];
  const howtos = [];
  return (
    <>
      <div className="px-5 py-10 flex flex-col gap-10 justify-center items-center min-h-[90vh]">
        <h1 className="text-3xl font-inter border-b-[1px]">Miscellaneous</h1>
        <div className="max-w-[700px] grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {misc.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-lg dark:bg-primary-dark bg-primary-light p-5"
            >
              <Link to={`/blog/${blog.postName}`}>
                <h1 className="text-base dark:text-secondary-light text-secondary-dark font-inter">
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
                <div className="flex flex-row gap-2 py-2 dark:text-primary-light text-primary-dark">
                  <span className="text-xl font-inter">
                    {blog.postName
                      .split("_")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-inter border-b-[1px]">Achievements</h1>
        <div className="max-w-[700px] grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {achievements.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-lg dark:bg-primary-dark bg-primary-light p-5"
            >
              <Link to={`/blog/${blog.postName}`}>
                <h1 className="text-base dark:text-secondary-light text-secondary-dark font-inter">
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
                <div className="flex flex-row gap-2 py-2 dark:text-primary-light text-primary-dark">
                  <span className="text-xl font-inter">
                    {blog.postName
                      .split("_")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-inter border-b-[1px]">Projects</h1>
        <div className="max-w-[700px] grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {projects.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-lg dark:bg-primary-dark bg-primary-light p-5"
            >
              <Link to={`/blog/${blog.postName}`}>
                <h1 className="text-base dark:text-secondary-light text-secondary-dark font-inter">
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
                <div className="flex flex-row gap-2 py-2 dark:text-primary-light text-primary-dark">
                  <span className="text-xl font-inter">
                    {blog.postName
                      .split("_")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-inter border-b-[1px]">How-Tos</h1>
        <div className="max-w-[700px] grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {howtos.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-lg dark:bg-primary-dark bg-primary-light p-5"
            >
              <Link to={`/blog/${blog.postName}`}>
                <h1 className="text-base dark:text-secondary-light text-secondary-dark font-inter">
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
                <div className="flex flex-row gap-2 py-2 dark:text-primary-light text-primary-dark">
                  <span className="text-xl font-inter">
                    {blog.postName
                      .split("_")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Blog;
