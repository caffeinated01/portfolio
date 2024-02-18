import Accordion from "./Components/Accordion";
import Reveal from "./Components/Reveal";
import YoungCatalystCert from "/yc-cert.jpeg";
import YoungCatalystImg1 from "/yc-1.jpg";
import DataScienceHackathonCert from "/vjcxtp-cert.jpeg";
import DataScienceHackathonImg1 from "/vjcxtp-1.jpeg";
import DataScienceHackathonImg2 from "/vjcxtp-2.jpeg";
import DataScienceHackathonPDF from "/vjcxtp-slides.pdf";
import DecryptedImg1 from "/oxd-1.jpg";
import DecryptedImg2 from "/oxd-2.jpg";
import DecryptedImg3 from "/oxd-3.jpg";
import MazeMasterImg1 from "/mm-1.jpg";
import MazeMasterImg2 from "/mm-2.jpg";
import BlahajImg1 from "/blahaj-1.png";

function Achievements() {
  return (
    <>
      <div className="px-5 py-10 flex flex-col justify-center min-h-[90vh]">
        <div className="flex justify-between w-full text-xs dark:text-secondary-dark text-secondary-light px-2 py-1">
          <h1>EVENT</h1>
          <h1>DATE</h1>
        </div>
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
                  together to design authentic and innovative solutions for
                  their immediate environment. Students are required to make
                  their own Micro:bit contraption using recycled materials to
                  simulate a solution to a problem they have brought up.
                </p>
                <p>
                  Having little experience in prototyping, it was challenging
                  for us to design a contraption. Prior to this, my only
                  experience in prototyping was in lower secondary D&T class.
                  So, to be challenged into coming up with our own contraption
                  was not easy for me.
                </p>
                <p>
                  My team decided to work on different parts of the contraption
                  simultaneously. I worked on the Micro:bit code, while my
                  teammate worked on bringing the cardboard contraption to live.
                </p>
                <p>
                  My team made a contraption to cool classrooms down using a
                  ventilation system. As global warming worsens, daily
                  temperatures are on the rise and the weather has become more
                  unpredictable. In classrooms, students are always complaining
                  about the hot weather. Therefore, we created this contraption
                  in hopes of making students' study environment more conducive
                  and comfortable.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={YoungCatalystCert}
                      ></img>
                    }
                  />
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={YoungCatalystImg1}
                      ></img>
                    }
                  />
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
                  Data Science Hackathon is a three-day bootcamp jointly
                  conducted by Temasek Polytechnic (TP) and Victoria Junior
                  College (VJC).
                </p>
                <p>
                  In this three-day hackathon, participants will learn the use
                  of Python in data analysis. Working in a team of 3,
                  participants will then apply what they have learnt in a group
                  project involving interesting, real-life contexts.
                </p>
                <p>
                  Our data set shows 769 different houses and their compactness,
                  surface area, wall area, roof area, height, orientation,
                  glazing level, glazing area distribution, heating and cooling
                  load.
                </p>
                <p>
                  Using the provided dataset, we were required to create a data
                  analysis and visualization pipeline to explore the factors
                  influencing energy efficiency in residential buildings.
                  Additionally, build a predictive model to estimate the energy
                  efficiency of a house based on its features.
                </p>
                <p>
                  We also had to present our data in the form of slides, which
                  you can download {/* <span className=""> */}
                  <a
                    className="dark:text-secondary-dark text-secondary-light"
                    href={DataScienceHackathonPDF}
                    download
                  >
                    here.
                  </a>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={DataScienceHackathonCert}
                      ></img>
                    }
                  />
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={DataScienceHackathonImg1}
                      ></img>
                    }
                  />
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={DataScienceHackathonImg2}
                      ></img>
                    }
                  />
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
                  My team and I worked together and racked up as many points as
                  we could in the short time span we had, securing our spots as
                  first place.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={DecryptedImg1}
                      ></img>
                    }
                  />
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={DecryptedImg2}
                      ></img>
                    }
                  />
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={DecryptedImg3}
                      ></img>
                    }
                  />
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
                  Maze Master is a competition where participants are required
                  to write an algorithm for their robots to navigate a 4x4 maze
                  within the shortest time in order to win.
                </p>
                <p>
                  With little to no experience with robotics, I led my team to
                  read up the documentation for mbot2, and started piecing
                  together parts of the algorithm. I faced many difficulties
                  along the way due to the documentation being quite unclear,
                  but through trial and error, our alogrithm was completed by
                  day 1.
                </p>
                <p>
                  During the actual competition, our robot initially ran into
                  issues, such as the sensor not being calibrated. We were quick
                  to troubleshoot, not panicking under pressure. Our robot
                  completed the maze faster than we had expected, securing us a
                  third place in the competition, beating many strong opponents.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={MazeMasterImg1}
                      ></img>
                    }
                  />
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={MazeMasterImg2}
                      ></img>
                    }
                  />
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
                  This 12-hour marathon pushed the boundaries of our technical
                  skills, collaboration, and problem-solving abilities. However,
                  our team fell short and did not manage to get a good
                  placement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        src={BlahajImg1}
                      ></img>
                    }
                  />
                </div>
              </div>
            </div>
          }
        />
        <Accordion
          items={["HACK@AC", "February 2024"]}
          body={
            <div>
              <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
                UPCOMING
              </span>
              <div className="space-y-5">
                <p>
                  HACK@AC is a Capture-The-Flag competition, where participants
                  play to earn points by solving problems relating to
                  cryptography, data security, and other prominent cybersecurity
                  issues.
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  <img
                    className="max-h-[300px] object-scale-down"
                    src={}
                  ></img>
                </div> */}
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}

export default Achievements;
