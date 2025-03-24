import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto opacity-50">
        <div>
          <div className="flex flex-wrap justify-center">
            <a
              href="https://linkedin.com/in/nguyenquandev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <img 
                src="/assets/linkedin.svg" 
                alt="LinkedIn" 
                className="dark:filter dark:brightness-0 dark:invert-[0.85] dark:sepia-[0.20] dark:saturate-[1000%] dark:hue-rotate-[340deg]"
                style={{ width: '1.3rem', height: '1.5rem' }} 
              />
            </a>
            <a
              href="https://github.com/quandaworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center ml-2"
            >
              <img 
                src="/assets/github.svg" 
                alt="Github" 
                className="dark:filter dark:brightness-0 dark:invert-[0.85] dark:sepia-[0.20] dark:saturate-[1000%] dark:hue-rotate-[340deg]"
                style={{ width: '1.4rem', height: '1.5rem' }} 
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 opacity-50">
        Copyright &copy; {new Date().getFullYear()} Quan Nguyen
      </p>
    </div>
  );
}

export default Footer;
