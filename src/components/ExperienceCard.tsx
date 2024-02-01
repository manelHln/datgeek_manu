import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"], weight: ["200", "300", "400", "500", "600"]})

const ExperienceCard = () => {
  return (
    <div className={`border border-border-color text-primary-text font-light bg-background-lighter p-8 flex flex-col ${inter.className}`}>
      <span className={`uppercase text-xs border border-border-color bg-background-lighter p-2 self-end ${inter.className}`}>2 hours</span>
      <p className="uppercase text-sm">Do we match?</p>
      <p className="uppercase text-md">discovery call</p>
      <p className="font-extralight">
        Before we start, we determine if and how I can help you. What are your
        requirements for your new website? Why do you need a new website? What
        goals do you have, and what problems can we solve with a new website?
      </p>
      <ul>
        <li>We get to know each other better</li>
        <li>Determine how I can best assist you</li>
        <li>Understand the goals you have for your website</li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
