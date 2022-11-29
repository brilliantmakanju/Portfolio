import Head from "next/head";
// import dynamic from "next/dynamic";
// const Intro = dynamic(() => import("../component/Intro"))
// const About = dynamic(() => import("../component/About"))
// const Skill = dynamic(() => import("../component/Skills"))
// const Contact = dynamic(() => import("../component/Contact"))
// const Projects = dynamic(() => import("../component/Projects"))

import Intro from "../component/Intro";
import About from "../component/About";
import Skills from "../component/Skills";
import Contact from "../component/Contact";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alkis Savoullis | Portfolio</title>
        <meta name="description" content="Aliks savoullis Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
