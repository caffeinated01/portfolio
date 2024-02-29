import { useState, useEffect } from "react";
import Reveal from "../Components/ui/Reveal";

function Competitions() {
  const [competitions, setCompetitions] = useState([
    {
      postName: "vjc_x_tp_hackathon_2024",
      date: new Date("2024-03-14"),
      description: "Upcoming",
    },
    {
      postName: "hack@ac",
      date: new Date("2024-02-24"),
      description:
        "HACK@AC is a Capture-The-Flag competition, where participants play to earn points by solving problems relating to cryptography, data security, and other prominent cybersecurity issues.",
    },
    {
      postName: "blåhaj_ctf",
      date: new Date("2023-12-02"),
      description:
        "Blåhaj CTF is an extremely intense CTF that stretches over a whopping 12 hours.",
    },
    {
      postName: "maze_master",
      date: new Date("2023-10-21"),
      description:
        "Maze Master is a competition where participants are required to write an algorithm for their robots to navigate a 4x4 maze within the shortest time in order to win.",
    },
    {
      postName: "orion_x_decrypted",
      date: new Date("2023-09-08"),
      description:
        "Orion X: Decrypted is a series of bootcamps hosted annually where participants are taught different things in tech, this year being cyber-security. After teaching the basics of cyber-security, participants get to solve a murder mystery, with clues hidden within CTF questions.",
    },
    {
      postName: "vjc_x_tp_hackathon_2023",
      date: new Date("2023-06-01"),
      description:
        "Data Science Hackathon is a three-day bootcamp jointly conducted by Temasek Polytechnic (TP) and Victoria Junior College (VJC).",
    },
    {
      postName: "the_young_catalyst",
      date: new Date("2022-09-16"),
      description:
        "The Young Catalyst is a platform for young minds to come together to design authentic and innovative solutions for their immediate environment.",
    },
  ]);

  const sortByDate = () => {
    competitions.sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort in descending order
  };

  useEffect(() => {
    sortByDate();
    setCompetitions((prevComps) => [...prevComps]);
  }, []);

  return (
    <>
      <div className="px-5 py-12 flex flex-col gap-5 justify-center items-center min-h-[90vh]">
        <div className="flex flex-col gap-2 justify-start items-start">
          <span className="font-inter text-base dark:text-secondary-dark text-secondary-light font-bold">
            COMPETITIONS;
          </span>
          <ol className="relative border-s border-secondary-light dark:border-secondary-dark max-w-[850px]">
            {competitions.map((comp, idx) => (
              <li key={idx} className="py-2 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 dark:bg-primary-dark bg-primary-light border dark:border-background-dark border-background-light"></div>
                <time className="mb-1 font-normal leading-none dark:text-secondary-dark text-secondary-light">
                  {comp.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <Reveal
                  component={
                    <>
                      <h1 className="text-2xl font-inter font-semibold text-gray-900 dark:text-white">
                        {comp.postName
                          .split("_")
                          .map((word) => word[0].toUpperCase() + word.slice(1))
                          .join(" ")}
                      </h1>
                      <p className="mb-1 text-base font-normal text-secondary-light dark:text-secondary-dark">
                        {comp.description}
                      </p>
                    </>
                  }
                />
                <a
                  className="dark:text-primary-dark text-primary-light"
                  href={`/blog/${comp.postName}`}
                >
                  Read more →
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Competitions;
