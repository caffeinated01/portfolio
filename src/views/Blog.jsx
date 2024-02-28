import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([
    {
      postName: "chronically_online",
      date: new Date("2024-02-28"),
      thumbnail: "/chronically_online.jpg",
      tags: ["thoughts"],
    },
    {
      postName: "hello_world",
      date: new Date("2023-03-26"),
      thumbnail: "/hello_world.jpeg",
      tags: ["misc."],
    },
    {
      postName: "hack@ac",
      date: new Date("2024-02-24"),
      thumbnail: "/hac-1.png",
      tags: ["comp.", "howto"],
    },
    {
      postName: "blåhaj_ctf",
      date: new Date("2023-12-02"),
      thumbnail: "/blahaj-1.png",
      tags: ["comp."],
    },
    {
      postName: "maze_master",
      date: new Date("2023-10-21"),
      thumbnail: "/mm-1.jpg",
      tags: ["comp."],
    },
    {
      postName: "orion_x_decrypted",
      date: new Date("2023-09-08"),
      thumbnail: "/oxd-4.jpg",
      tags: ["comp."],
    },
    {
      postName: "vjc_x_tp_hackathon",
      date: new Date("2023-06-01"),
      thumbnail: "/vjcxtp-2.jpeg",
      tags: ["comp."],
    },
    {
      postName: "the_young_catalyst",
      date: new Date("2022-09-16"),
      thumbnail: "/yc-1.jpg",
      tags: ["comp."],
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const sortByDate = () => {
    blogs.sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort in descending order
  };

  useEffect(() => {
    sortByDate();
    setBlogs((prevBlogs) => [...prevBlogs]);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      selectedCategory === "" ||
      selectedCategory === "all" ||
      blog.tags.includes(selectedCategory)
  );

  return (
    <>
      <div className="flex gap-1 justify-center items-center space-x-2 pt-10">
        <span className="font-bodoniModa font-semibold text-4xl">JAVIER'S</span>
        <span className="font-pixelify text-5xl">BLOG</span>
      </div>
      <div className="flex flex-wrap justify-center items-center pt-10 gap-2">
        <button
          key="all"
          className="text-base px-4 py-2 rounded-md bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light font-pixelify md:hover:-translate-y-[3px] transition-transform duration-200 shadow-xl"
          onClick={() => handleCategoryClick("all")}
        >
          All
        </button>
        {[...new Set(blogs.flatMap((blog) => blog.tags))].map((category) => (
          <button
            key={category}
            className="text-base px-4 py-2 rounded-md bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light font-pixelify md:hover:-translate-y-[3px] transition-transform duration-200 shadow-xl"
            onClick={() => handleCategoryClick(category)}
          >
            {category[0].toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="px-5 py-10 flex flex-col gap-10 justify-center items-center min-h-[90vh]">
        <div className="max-w-[700px] mt-5 grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {filteredBlogs.map((blog, idx) => (
            <div key={idx} className="rounded-lg p-5">
              <Link to={`/blog/${blog.postName}`}>
                <h1 className="text-base text-secondary-light dark:text-secondary-dark font-inter">
                  {blog.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </h1>
                <img
                  src={blog.thumbnail}
                  className="rounded-md w-[300px] h-[200px] object-cover"
                ></img>
                <div className="flex flex-row gap-2 py-2 text-primary-light dark:text-primary-dark justify-between">
                  <span className="text-xl font-inter">
                    {blog.postName
                      .split("_")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </span>
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="pt-[0.6px] text-secondary-light dark:text-secondary-dark"
                    >
                      {tag}
                    </span>
                  ))}
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
