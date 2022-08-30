let previousJobs = [
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "Pure Match",
    location: "Remote",
    description: [
      "Performed a company-wide overhaul, which introduced new environments for development, testing, staging, and production.",
"Built the company's first CI/CD pipeline on AWS to automate testing and deployment, significantly reducing the risk of bad releases and saving ~10 hours per week of work.",
"Performed large-scale codebase refactors and optimizations, leading to a 70% improvement to app performance.",
"Created new app functionality and backend microservices to support user-specified matching preferences.",
"Developed fixes for 15 outstanding bugs, improving app reliability.",
      // "Worked alongside a senior developer to redesign internal system to introduce development, testing, staging, and production environment",
      // "Improved app's performance by 70% by refactoring code and fixing bugs",
      // "Introduced pipeline and automation best practices",
      // "Created new microservices and features for the operation of the Pure Match app",
    ],
    date: "Jan 2022 - May 2022",
    icon: "pm.png",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "MyBestPlan Electric Company ",
    location: "Houston, TX",
    description: [
      "Developed a Django API to serve the client-side application and handle HTTP requests.",
      "Worked with Development and Test teams to create automated CI/CD Pipelines using Git Actions and Jenkins.",
      "Deployed production ready product on AWS cloud running on Docker containers.",
    ],
    date: "Jul 2021 - Jan 2022",
    icon: "mbp-logo.jpg",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Eve's Garden Fine Food and Catering ",
    location: "New York, NY",
    description: [
      "Designed and built responsive webpages using ReactJS for conveying business branding and chef information.",
      "Practiced Agile development with the help of Azure DevOps to enable visible progress and adapt to feedback.",
      "Deployed the completed website on Heroku cloud platform.",
    ],
    date: "Jan 2021 - Jun 2021",
    icon: "kiss.png",
  },
  {
    id: 1,
    title: "Mentor",
    company: "University Of Houston",
    location: "Seattle, WA",
    description: [
      "Reinforced student understanding of core C++ and Python programming concepts through hosted discussion sessions",
      "Provided instruction to 80 plus junior and sophomore college students, leading to an average test score increase of 10%",
      "Covered material from multiple courses, including Introduction to Python and Object-Oriented Programming in C++",
    ],
    date: "Jun 2020 - Dec 2020",
    icon: "https://logo.clearbit.com/uh.edu",
  },
];

let previousProjects = [
  {
    id: 3,
    title: "MyBestPlan Electric Company",
    description: `
        Customer portal for viewing electricity usage and managing billing information.`,
    icon: "mbp.png",
    techStach: "Django, VueJS, Django REST framework, MySQL, Docker, Jenkins",
    github: "https://github.com/spartanHarvey/sdp22secondtolastpick",
    site: "https://stlp-mybestplan.netlify.app/",
  },
  {
    id: 2,
    title: "Homiefy",
    description: `
        Web application for college students to find roommates, `,
    icon: "homiefy.png",
    techStach: "NodeJS, ExpressJS, EJS, CSS, Docker, MongoDB",
    github: "https://github.com/spartanHarvey/Homiefy",
    site: "https://homiefy-group-a.herokuapp.com/",
  },
  {
    id: 1,
    title: "Netflix-Clone",
    description: `
        Netflix UI clone`,
    icon: "netflix-clone.png",
    techStach: "ReactJS, Firebase, Axios, TMDB API",
    github: "https://github.com/spartanHarvey/netflix-clone",
    site: "https://netflix-clone-4d0a9.web.app/",
  },
];

let previousEducations = [
  {
    id: 2,
    universityName: "University of Houston",
    collegeName: "College of Natural Sciences and Mathemathics",
    icon: "uh-logo.png",
    degree: "Bachelor's of Science, Computer Science",
    date: "Jan 2020 - May 2022",
  },
  {
    id: 3,
    universityName: "Houston Community College",
    collegeName: "Computer Science Department",
    icon: "https://logo.clearbit.com/hccs.edu",
    degree: "Associate of Science, Computer Science",
    date: "Jun 2017 - Dec 2019",
  },
];
export { previousJobs, previousProjects, previousEducations };
