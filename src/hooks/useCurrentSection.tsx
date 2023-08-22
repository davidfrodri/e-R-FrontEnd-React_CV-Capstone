import { useEffect, useState } from "react";

const useCurrentSection = (): { currentSection: string } => {
  const [currentSection, setCurrentSection] = useState("about-me");
  
  
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLDivElement>("section[id]");
    const mainSection = document.querySelector<HTMLDivElement>("#main")
    
    if (mainSection !== null) {
      const navHighlighter = (): void => {
        const currentPosition = mainSection.scrollTop + 1;
        sections.forEach((section) => {
          const sectionStart = section.offsetTop;
          const sectionEnd = sectionStart + section.offsetHeight;
          
          if (currentPosition > sectionStart && currentPosition < sectionEnd) {
            setCurrentSection(section.id);
          }
        });
      };
      mainSection.addEventListener("scroll", navHighlighter);
    }
  }, []);
  return { currentSection };
};

 

export default useCurrentSection;