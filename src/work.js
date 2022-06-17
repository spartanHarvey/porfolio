let previousJobs = [
    {
        id: 4,
        title:"Full-Stack Developer",
        company:"Pure Match",
        location:"Remote",
        description:`
        • Worked alongside a senior developer to redesign internal system to introduce development, testing, staging, and
        production environment.
        • Improved app's performance by 70% by refactoring code and fixing bugs.
        • Introduced pipeline and automation best practices.
        • Created new microservices and features for the operation of the Pure Match app.`,
        date:"Jan 2022 - May 2022",
        icon:"pm.png",
    },
    {
        id: 3,
        title:"Backend Developer",
        company:"MyBestPlan Electric Company ",
        location:"Houston, TX",
        description:`
        •	Developed a Django service to serve the client-side application and handle HTTP requests.
        •	Deployed releases on MyBestPlan’s cloud infrastructure using Docker.
        •	Worked with Development and Test teams to create automated CI/CD Pipelines using Git Actions and Jenkins
        `,
        date:"Jan 2022 - May 2022",
        icon:"pm2.png",
    },
    {
        id: 2,
        title:"Web Developer",
        company:"Eve's Garden Fine Food and Catering ",
        location:"New York, NY",
        description:`
        •	Designed and built responsive webpages for conveying business branding and chef information.
        •	Practiced Agile development to enable visible progress and adapt to feedback.
        •	Deployed the completed website on Heroku.
        `,
        date:"Jan 2022 - May 2022",
        icon:"pm.png",
    },
    {
        id: 1,
        title:"Mentor",
        company:"University Of Houston",
        location:"Seattle, WA",
        description:`
        •	Reinforced student understanding of core C++ and Python programming concepts through hosted discussion sessions.
        •	Provided instruction for over 80 junior and sophomore college students, leading to an average test score increase of 10%.
        •	Covered material from multiple courses, including Introduction to Python and Object-Oriented Programming in C++.
        `,
        date:"Jun 2020 - Sept 2020",
        icon:"https://logo.clearbit.com/uh.edu",
    }
]

let previousProjects = [
    {
        id: 3,
        title:"MyBestPlan Electric Company",
        description:`
        Customer portal for viewing electricity usage and managing billing information.`,
        icon:"mbp.png",
        techStach:"Django, VueJS, Django REST framework, MySQL, Docker, Jenkins",
        github:"",
        site:"https://stlp-mybestplan.netlify.app/"
    },
    {
        id: 2,
        title:"Homiefy",
        description:`
        Web application for college students to find roommates, `,
        icon:"homiefy.png",
        techStach:"NodeJS, ExpressJS, EJS, CSS, Docker, MongoDB",
        github:"https://github.com/spartanHarvey/Homiefy",
        site:"https://homiefy-group-a.herokuapp.com/"
    },
    {
        id: 1,
        title:"Netflix-Clone",
        description:`
        Netflix UI clone`,
        icon:"netflix-clone.png",
        techStach:"ReactJS, Firebase, Axios, TMDB API",
        github:"https://github.com/spartanHarvey/netflix-clone",
        site:"https://netflix-clone-4d0a9.web.app/"
    },
]

let previousEducations = [
    // {
    //     id: 1,
    //     universityName:"Univerity of California",
    //     collegeName:"College of Technology",
    //     icon:"uh-logo.png",
    //     degree:"Master Degree of Science",
    //     date:"Jan 2023 - May 2025"
    // },
    {
        id: 2,
        universityName:"Univerity of Houston",
        collegeName:"College of Natural Sciences and Mathemathics",
        icon:"uh-logo.png",
        degree:"Bachelor's of Science, Computer Science",
        date:"Jan 2020 - May 2022"
    },
    {
        id: 3,
        universityName:"Houston Community College",
        collegeName:"Computer Science Department",
        icon:"https://logo.clearbit.com/hccs.edu",
        degree:"Associate of Science, Computer Science",
        date:"Jun 2017 - Dec 2019"
    }
]
export {previousJobs, previousProjects,previousEducations};