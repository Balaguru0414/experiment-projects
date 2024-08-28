import { createContext, useContext, useEffect, useRef, useState } from "react";

const ObserverContext = createContext();
export const useObserver = () => useContext(ObserverContext);

const ObserverContexts = ({ children }) => {
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isProjectsInView, setIsProjectsInView] = useState(false);
  const [isSkillInView, setIsSkillInView] = useState(false);
  const [isExperienceInView, setIsExperienceInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "about") {
          if (entry.isIntersecting) {
            setIsAboutInView(true);
          }
        } else if (entry.target.id === "project") {
          if (entry.isIntersecting) {
            setIsProjectsInView(true);
          }
        } else if (entry.target.id === "contact") {
          if (entry.isIntersecting) {
            setIsContactInView(true);
          }
        } else if (entry.target.id === "experience") {
          if (entry.isIntersecting) {
            setIsExperienceInView(true);
          }
        } else if (entry.target.id === "skills") {
          if (entry.isIntersecting) {
            setIsSkillInView(true);
          }
        }
      });
    }, options);

    observerRef.current.observe(document.getElementById("about"));
    observerRef.current.observe(document.getElementById("project"));
    observerRef.current.observe(document.getElementById("contact"));
    observerRef.current.observe(document.getElementById("experience"));
    observerRef.current.observe(document.getElementById("skills"));

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  const value = {
    isAboutInView,
    isProjectsInView,
    isContactInView,
    isExperienceInView,
    isSkillInView,
  };

  return (
    <ObserverContext.Provider value={value}>
      {children}
    </ObserverContext.Provider>
  );
};

export default ObserverContexts;
