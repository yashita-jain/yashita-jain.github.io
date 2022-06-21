import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import pic from "./images/pic3.jpeg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen  min-h-screen flex-col items-center justify-center relative bg-primary pb-20 p-2">
        {/*Navbar*/}
        <nav className="w-full px-6 z-50 inset-x-0 top-2 flex justify-center  bg-primary ">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex fixed items-center">
            <p className="text-lg text-slate-200 font-medium">Yashita Jain</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#experience"
                className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1s3-f-cHRmvW-5KsRGYfBpGoX4GS2XM2F/view?usp=sharing"
                className="ml-auto text-base text-textBase hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                Download
              </a>
            </div>
            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 rounded-lg fixed top-24 bg-navBar right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#experience"
                  className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="https://drive.google.com/file/d/1s3-f-cHRmvW-5KsRGYfBpGoX4GS2XM2F/view?usp=sharing"
                  className="text-base text-textBase hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>
        {/* <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/zxZUv-ghwlz-enVt/scene.splinecode" />
      </div> */}

        {/* Main Sections */}
        <main className="w-80% mt-5">
          {/* About Section */}
          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-48 mb-24 w-5/6 m-auto"
            id="home"
          >
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={pic}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full  flex flex-col items-center justify-center">
              <h1 className="text-emerald-200  text-3xl font-bold">Hy!</h1>{" "}
              <br></br>
              <p className="text-lg text-white text-center">
                I am Yashita Jain, a Computer Science Engineering Junior from
                IIIT Bhopal.
              </p>
              <p className="text-lg text-textBase text-center">
                I am Core Team Member of IIITians Network and Member of Web
                Development team of Codame Club IIIT Bhopal. I am an avid
                learner and have a knack to understand and identify the trending
                patterns and developments. I have good communication skills in
                speech as well as writing. Positive and productive work
                environments and team morale fascinates me. Thus, leading to
                working hard and putting extra effort each new day as a loyal
                team member.
              </p>
              <a href="#contact">
                {" "}
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
                >
                  <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Hire Me
                  </span>
                </motion.button>
              </a>
            </div>
          </section>

          {/* Timeline */}
          <section
            className="w-full flex  flex-col items-center justify-center"
            id="experience"
          >
            <p className="text-2xl text-gray-400 capitalize py-20">
              Experience
            </p>
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21,24,31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21,24,31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21,24,31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description} </p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
          {/* Projects Section */}
          <section
            className="flex flex-col items-center justify-center my-24 "
            id="projects"
          >
            <p className="text-2xl text-gray-400 capitalize pt-20">Projects</p>

            <div className="flex flex-wrap items-center justify-center my-24 gap-4">
              {Projects &&
                Projects.map((n) => (
                  <div
                    key={n.id}
                    className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w[275px] hover:border-zinc-600 duration-100 ease-in-out"
                  >
                    <p className="text-md text-textBase font-medium uppercase">
                      {/* {n.name.length > 25 ? `{n.name.slice(0,25)}...` : n.name} */}
                      {n.name}
                    </p>
                    <img
                      src={n.imageSrc}
                      className="w-96 h-60 object-cover rounded-md my-4 "
                      alt=""
                    />
                    <div className="flex flex-1 items-center justify-between">
                      <p className="text-lg text-gray-300">
                        Technologies
                        <span className="block text-sm text-gray-500">
                          {n.techs}
                        </span>
                      </p>
                      <a href={n.github}>
                        <motion.div whileTap={{ scale: 0.8 }}>
                          <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="flex flex-col items-center justify-center w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Connect with me</p>

            <div className="flex items-center justify-center w-full mt-24  mb-5 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={n.id}
                    href={n.link}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border  border-zinc-800  rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
            <p className="text-white text-base ">jainyashita06@gmail.com</p>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
