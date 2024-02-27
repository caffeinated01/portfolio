import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Code from "./Code";
import Paragraph from "./Paragraph";
import Header from "./Header";
import Image from "./Image";

function Post() {
  const params = useParams();
  const postDetails = {
    title: params.postName
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" "),
    postName: params.postName,
  };
  const [post, setPost] = useState("");
  useEffect(() => {
    async function fetchPost() {
      const file = await import(`../../../posts/${postDetails.postName}.md`);
      await fetch(file.default)
        .then((res) => res.text())
        .then((response) => setPost(response));
      console.log(post);
    }
    fetchPost();
  }, []);

  return (
    <>
      <div>
        <article className="text-2xl sm:text-xl px-5 py-12 flex flex-col gap-5 justify-center items-center">
          <h1 className="font-inter text-3xl dark:text-secondary-dark text-secondary-light">
            {postDetails.title}
          </h1>
          <div className="max-w-[900px] w-full">
            <Markdown
              options={{
                overrides: {
                  Code: { component: Code },
                  h1: { component: Header },
                  p: { component: Paragraph },
                  img: { component: Image },
                },
              }}
            >
              {post}
            </Markdown>
          </div>
        </article>
      </div>
    </>
  );
}
export default Post;
