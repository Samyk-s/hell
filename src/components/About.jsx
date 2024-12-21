import { Blockquote } from "flowbite-react";

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        About Me
      </h2>
      <Blockquote className="text-center px-40">
        Hi, I&apos;m Samyak Bajracharya, a motivated and detail-oriented Frontend
        Engineer with a passion for crafting responsive, user-centric web
        applications. I recently completed my coursework for a Bachelor&apos;s in
        Computer Engineering at Nepal College of Information Technology and am
        awaiting my final results. Currently, I am enhancing my expertise in
        React.js through advanced training at Broadway Infosys.
      </Blockquote>
    </section>
  );
};

export default About;
