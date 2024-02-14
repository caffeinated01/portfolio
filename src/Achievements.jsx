import Accordion from "./Components/Accordion";
import YoungCatalystCert from "../public/pictures/yc-cert.jpeg";
import YoungCatalystImg1 from "../public/pictures/yc-1.jpg";
import DataScienceHackathonCert from "../public/pictures/vjcxtp-cert.jpeg";
import DataScienceHackathonPDF from "../public/pictures/vjcxtp-slides.pdf";
import DecryptedImg1 from "../public/pictures/oxd-1.jpg";
import DecryptedImg2 from "../public/pictures/oxd-2.jpg";
import DecryptedImg3 from "../public/pictures/oxd-3.jpg";
import DecryptedImg4 from "../public/pictures/oxd-4.jpg";
import MazeMasterImg1 from "../public/pictures/mm-1.jpg";
import MazeMasterImg2 from "../public/pictures/mm-2.jpg";
import BlahajImg1 from "../public/pictures/blahaj-1.png";
import { LuDownload } from "react-icons/lu";

function Achievements() {
  return (
    <div className="p-5 flex flex-col-reverse justify-center min-h-[90vh]">
      <Accordion
        items={["The Young Catalyst", "June 2022"]}
        body={
          <div>
            <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
              BEST PROBLEM STATEMENT
            </span>
            <div className="space-y-5">
              <p>
                The Young Catalyst is a platform for young minds to come
                together to design authentic and innovative solutions for their
                immediate environment. Students are required to make their own
                Micro:bit contraption using recycled materials to simulate a
                solution to a problem they have brought up.
              </p>
              <p>
                My team made a contraption to cool classrooms down using a
                ventilation system. As global warming worsens, daily
                temperatures are on the rise and the weather has become more
                unpredictable. In classrooms, students are always complaining
                about the hot weather. Therefore, we created this contraption in
                hopes of making students' study environment more conducive and
                comfortable.
              </p>
              <div className="flex flex-wrap gap-2">
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={YoungCatalystCert}
                ></img>
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={YoungCatalystImg1}
                ></img>
              </div>
            </div>
          </div>
        }
      />
      <Accordion
        items={["VJC x TP Data Science Hackathon", "July 2023"]}
        body={
          <div>
            <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
              PARTICIPANT @ VICTORIA JC
            </span>
            <div className="space-y-5">
              <p>
                Data Science Hackathon is a three-day bootcamp jointly conducted
                by Temasek Polytechnic (TP) and Victoria Junior College (VJC).
              </p>
              <p>
                In this three-day hackathon, participants will learn the use of
                Python in data analysis. Working in a team of 3, participants
                will then apply what they have learnt in a group project
                involving interesting, real-life contexts.
              </p>
              <p>
                Our data set shows 769 different houses and their compactness,
                surface area, wall area, roof area, height, orientation, glazing
                level, glazing area distribution, heating and cooling load.
              </p>
              <p>
                Using the provided dataset, we were required to create a data
                analysis and visualization pipeline to explore the factors
                influencing energy efficiency in residential buildings.
                Additionally, build a predictive model to estimate the energy
                efficiency of a house based on its features.
              </p>
              <p className="flex gap-2">
                We also had to present our data in the form of slides, which you
                can download here.
                <a
                  className="dark:text-secondary-dark text-secondary-light"
                  href={DataScienceHackathonPDF}
                  download
                >
                  <LuDownload />
                </a>
              </p>
              <div className="flex flex-wrap gap-2">
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={DataScienceHackathonCert}
                ></img>
              </div>
            </div>
          </div>
        }
      />
      <Accordion
        items={["Orion X: Decrypted", "September 2023"]}
        body={
          <div>
            <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
              1ST PLACE @ NGEE ANN POLYTECHNIC
            </span>
            <div className="space-y-5">
              <p>
                ORION X: Decrypted is a competition, organised by Ngee Ann
                Polytechnic's School of InfoComm Technology.
              </p>
              <p>
                Over the 2 days, we were trained to develop skills related to
                cybersecurity. We learnt about cryptography which involves
                encryption and decryption of ciphers, and digital forensics
                which involves analysing meta data of files. We were also
                presented with a Capture The Flag style competition, where we
                were required to solve the most amount of questions to win.
                Questions were phrased in a way that it was relevant to real
                world contexts, something a cybersecurity analyst would face.
              </p>
              <p>
                My team and I worked together and racked up as many points as we
                could in the short time span we had, securing our spots as first
                place.
              </p>
              <div className="flex flex-wrap gap-2">
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={DecryptedImg1}
                ></img>
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={DecryptedImg2}
                ></img>
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={DecryptedImg3}
                ></img>
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={DecryptedImg4}
                ></img>
              </div>
            </div>
          </div>
        }
      />
      <Accordion
        items={["DSTA & DSO: Maze Master", "October 2023"]}
        body={
          <div>
            <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
              2ND RUNNER UP @ VICTORIA SCHOOL
            </span>
            <div className="space-y-5">
              <p>
                Maze Master is a competition where participants are required to
                write an algorithm for their robots to navigate a 4x4 maze
                within the shortest time in order to win.
              </p>
              <p>
                With little to no experience with robotics, I led my team to
                read up the documentation for mbot2, and started piecing
                together parts of the algorithm. By the end of day 1, our robot
                was already completed, with the alogrithm being the most
                efficient we could make it.
              </p>
              <p>
                During the actual competition, our robot completed the maze
                faster than we had expected, securing us a third place in the
                competition, beating many strong opponents.
              </p>
              <div className="flex flex-wrap gap-2">
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={MazeMasterImg1}
                ></img>
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={MazeMasterImg2}
                ></img>
              </div>
            </div>
          </div>
        }
      />
      <Accordion
        items={["BuildingBloCS: Blåhaj CTF", "December 2023"]}
        body={
          <div>
            <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
              PARTICIPANT
            </span>
            <div className="space-y-5">
              <p>
                Blåhaj CTF is an extremely intense CTF that stretches over a
                whopping 12 hours.
              </p>
              <p>
                With little to no experience with robotics, I led my team to
                read up the documentation for mbot2, and started piecing
                together parts of the algorithm. By the end of day 1, our robot
                was already completed, with the alogrithm being the most
                efficient we could make it.
              </p>
              <p>
                This 12-hour marathon pushed the boundaries of my technical
                skills, collaboration, and problem-solving abilities. However,
                our team fell short and did not manage to get a good placement.
              </p>
              <div className="flex flex-wrap gap-2">
                <img
                  className="max-h-[300px] rounded-md object-scale-down"
                  src={BlahajImg1}
                ></img>
              </div>
            </div>
          </div>
        }
      />
      <div className="flex justify-between w-full text-xs dark:text-secondary-dark text-secondary-light px-2 py-1">
        <h1>COMPETITION</h1>
        <h1>DATE</h1>
      </div>
    </div>
  );
}

export default Achievements;
