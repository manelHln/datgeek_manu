import { Twitter, Linkedin, Github } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-2">
      <div className="rounded-full cursor-pointer  transition-all flex justify-center items-center p-4 hover:animate-wiggle bg-background-lighter border border-border-color text-primary-text hover:scale-110">
        <Twitter />
      </div>
      <div className="rounded-full cursor-pointer transition-all flex justify-center items-center p-4 hover:animate-wiggle bg-background-lighter border border-border-color text-primary-text hover:scale-110">
        <Linkedin />
      </div>
      <div className="rounded-full cursor-pointer transition-all flex justify-center items-center p-4 hover:animate-wiggle bg-background-lighter border border-border-color text-primary-text hover:scale-110">
        <Github />
      </div>
    </div>
  );
};

export default SocialMedia;
