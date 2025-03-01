import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 bg-gray-900 text-white mt-10">
      <p className="text-lg font-semibold animate-pulse text-blue-400 drop-shadow-md flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span className="flex items-center gap-2">
          Made By StayLearner
          <a
            href="https://github.com/StayLearner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Github />
          </a>
        </span>
        <span className="block sm:inline">Built For EveryLearner ❤️</span>
      </p>
    </footer>
  );
};

export default Footer;
