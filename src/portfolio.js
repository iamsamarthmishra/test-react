/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Samarth Mishra",
  description:
    "I'm a passionate Full Stack Developer and Penetration Tester with expertise in web development, ethical hacking, and data structures. I'm proficient in HTML, JS, PHP, MongoDB, Linux, and Google Cloud Terminal. I've contributed to Internet Archive.org and the Tor Project through Google Summer of Code 2023. I hold the CEH certification from IIT Kharagpur and completed courses in JavaScript, Python, reverse engineering, and ethical hacking & CISSP certified. Reach out to me!",
  og: {
    title: "Samarth Mishra Portfolio",
    type: "website",
    url: "https://samarthmishra.xyz/",
  },
};

//Home Page
const greeting = {
  title: "Samarth Mishra",
  logo_name: "Samarthmishra",
  nickname: "stackdevsamarth",
  subTitle:
    "Ingenious and determined Full-stack developer & a Offensive Penetration Tester with great experience as Freelancer and Intern in IT & Software Engineering with experience in JavaScript, Python, reverse engineering, and ethical hacking. I have contributed to Internet Archive.org and the Tor Project through Google Summer of Code 2023.",

  resumeLink:
    "https://drive.google.com/file/d/16ighlMjEdZ7ZrN_YLNhkXnL-zr4XN2hl/view",
  portfolio_repository: "https://github.com/stackdevsamarth",
  githubProfile: "https://github.com/stackdevsamarth",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/stackdevsamarth",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/stackdevsamarth/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:stackdevsamarth@programmer.net",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/stackdevsamarth",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/stackdevsamarth/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos-flask",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Html,Css/Scss,Js,Bootstrap / React-Redux.",
        "⚡ Developing mobile applications using Kotlin.",
        "⚡ Creating application backend in Php, python & MongoDb.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PhP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Google cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Express",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://github.com/Samarth277",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/samarthmishra655",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/stackdevsamarth",
    },
    {
      siteName: "GitLab",
      iconifyClassname: "simple-icons:gitlab",
      style: {
        color: "#323754",
      },
      profileLink: "https://levelup.gitlab.com/c/TBEqAJwSTSKaOvUZBbimhw",
    },
    {
      siteName: "UpGrad",
      iconifyClassname: "simple-icons:javascript",
      style: {
        color: "#20BEFF",
      },
      profileLink:
        "https://courses.cognitiveclass.ai/certificates/ffe787d2eced4fc8a65a35d8400bf7be",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kharagpur",
      subtitle: "Ethical Hacking",
      logo_path: "iitkgp.png",
      alt_name: "IITkhp Kharagpur",
      duration: "2021-2022",
      descriptions: [
        "⚡ I have studied basic ethical hacking subjects like Networking, Social Engineering, Bug Bounting, Cryptography, Metasploit Exploiting, SQL Injection etc.",
        "⚡ I have Complete the course from NPTEL Under Ministry of Education.",
      ],
      website_link: "#",
    },
    {
      title: "Harvard University",
      subtitle: "CS50 Introduction to Computer Science",
      logo_path: "harvard.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
        "⚡ Apart from this, I have also done how to think algorithmically and solve programming problems efficiently.",
      ],
      website_link:
        "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x?utm_source=aw&utm_medium=affiliate_partner&utm_content=text-link&utm_term=301045_https%3A%2F%2Fwww.class-central.com%2F&awc=6798_1674996141_ede6fd353767e4dfcadb7ccb697bdc11",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CompTIA Network+ (N10-007)",
      subtitle: "- Samarth Mishra",
      logo_path: "linkd.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/00065cba2dea5e2d4f0e5fbb28e02f349ad19807f45e1b363ab99f790d6de5d5",
      alt_name: "CompTia +",
      color_code: "#00000099",
    },
    {
      title: "CISSP",
      subtitle: "- Samarth Mishra",
      logo_path: "simp.png",
      certificate_link:
        "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzNCIsImNlcnRpZmljYXRlX3VybCI6Imh0dHBzOlwvXC9jZXJ0aWZpY2F0ZXMuc2ltcGxpY2RuLm5ldFwvc2hhcmVcL3RodW1iXzMyNjUyMzVfMTY0NTI2NDkzMC5wbmciLCJ1c2VybmFtZSI6IlNhbWFydGggTWlzaHJhIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_3265235_1645264930.png&_branch_match_id=1066414404632314432&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1vc0dSr0yffKTi1JAgAxk6y6IwAAAA%3D%3D",
      alt_name: "Simplilearn",
      color_code: "#0C9D5899",
    },
    {
      title: "NoSQL and DBaaS 101",
      subtitle: "- Samarth Mishra",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/ffe787d2eced4fc8a65a35d8400bf7be",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Front End Development Libraries",
      subtitle: "- Samarth Mishra",
      logo_path: "fcc.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/Samarth27/front-end-development-libraries",
      alt_name: "Freecodecamp",
      color_code: "#D83B0199",
    },
    {
      title: "React.js",
      subtitle: "- Samarth Mishra",
      logo_path: "upgrad.png",
      certificate_link:
        "https://upgrad.certificate.givemycertificate.com/c/ab9e5022-2914-4fb7-8997-598c69ad83cf",
      alt_name: "upgrad",
      color_code: "#1F70C199",
    },
    {
      title: "Reverse Engineering and Malware Analysis",
      subtitle: "- Samarth Mishra",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2818bb70-1cdc-42e6-8254-656600defa28/",
      alt_name: "udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "Offensive Penetration Testing",
      subtitle: "- Samarth Mishra",
      logo_path: "cybrary.png",
      certificate_link:
        "https://app.cybrary.it/courses/api/certificate/CC-95596996-19b2-4f8b-9035-062cda1c96e3/view",
      alt_name: "Codedamn",
      color_code: "#00000099",
    },
    {
      title: "Web Development",
      subtitle: "- Samarth Mishra",
      logo_path: "internshala.png",
      certificate_link:
        "https://trainings.internshala.com/view_certificate/96AAA240-4342-4999-DAB2-39D84041DF1F/92gjjnseyon/",
      alt_name: "Internshala",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many clients and company as Freelancer, Intern, Designer and Software Architect. I have also worked with some well established companies mostly as Frontend Developer. I love participating events and that is why I am also involved with many opensource communities & college events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Digital Marketing Intern",
          company: "Apponix Technology",
          company_url: "https://apponix.com/",
          logo_path: "apponix.jpg",
          duration: "March 2023 - June 2023",
          location: "Pune, Maharashtra",
          description:
            "As a Digital Marketing Intern at Apponix Technology, I am eager to learn and grow in the dynamic world of digital marketing. I am a highly motivated individual with a strong interest in digital marketing and a passion for creating engaging content.",
          color: "#0879bf",
        },
        {
          title: "Full-stack Developer",
          company: "Digitea",
          company_url: "https://digitea.in/",
          logo_path: "digitea.png",
          duration: "Oct 2022 - Nov 2022",
          location: "Mumbai, Maharashtra.",
          description:
            "I had the opportunity to collaborate closely with talented designers and developers to bring user interfaces to life for both web and mobile applications. Working in a team environment, I contributed to the implementation of intuitive and visually appealing interfaces that enhanced user experiences. Alongside this, I gained proficiency in utilizing version control systems like Git, ensuring smooth collaboration and efficient workflow management. With a keen eye for detail and a commitment to delivering exceptional work, I consistently met project deadlines while maintaining a high standard of quality.",
          color: "#9b1578",
        },
        {
          title: "Freelancer",
          company: "Freelancer",
          company_url: "https://www.freelancer.com/",
          logo_path: "freelance.png",
          duration: "Oct 2020 - July 2022",
          location: "Remotely",
          description:
            "During my freelance career, I have had the privilege of collaborating with various clients to gain a deep understanding of their unique business requirements. This knowledge has allowed me to design and develop websites and applications that perfectly align with their needs, delivering solutions that enhance their online presence. In addition, I have honed my skills in optimizing websites and applications for search engines, employing a combination of on-page and off-page SEO techniques to increase visibility and drive organic traffic. ",
          color: "#fc1f20",
        },
      ],
    },
    //{
    //title: "Internships",
    //experiences: [
    //{
    //title: "Machine Learning Intern",
    //company: "TikTok Inc.",
    //company_url: "https://www.tiktok.com/en/",
    //logo_path: "tiktok_logo.png",
    //duration: "May 2022 - Aug 2022",
    //location: "San Francisco, USA",
    //description:
    //"Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //color: "#000000",
    //},
    //{
    //title: "Data Science Research Intern",
    //company: "Delhivery Pvt. Ltd.",
    //company_url: "https://www.delhivery.com/",
    //logo_path: "delhivery_logo.png",
    //duration: "May 2019 - Sept 2019",
    //location: "Gurgaon, Haryana",
    //description:
    //"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //color: "#ee3c26",
    // },
    //{
    //title: "Data Science Intern",
    //company: "Intel Indexer LLC",
    //company_url:
    //"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //logo_path: "intel_logo.jpg",
    //duration: "Nov 2018 - Dec 2018",
    //location: "Work From Home",
    //description:
    //"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //color: "#0071C5",
    //},
    //],
    //},
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Group",
          company: "Google",
          company_url:
            "https://developers.google.com/profile/u/stackdevsamarth",
          logo_path: "google_logo.png",
          duration: "June 2023 - Present",
          location: "Kanpur",
          description:
            "I have the opportunity to learn new skills in a variety of formats. I also meet local developers virtually or in-person with similar interests in technology. The community prides itself on being an inclusive environment where everyone and anyone interested in tech",
          color: "#4285F4",
        },
        {
          title: "Allenshot Member",
          company: "Allenhouse Group of Institutions",
          institution_url: "https://allenhouse.ac.in/",
          logo_path: "allen.jpg",
          duration: "Aug 2022 - Present",
          location: "Kanpur, Uttar Pradesh",
          description:
            "Allenshots - The Photography Club where i'm handling video editing work which aspire me to explore my photography & editing skills.",
          color: "#D83B01",
        },
        //{
        //title: "Mozilla Campus Captain",
        //company: "Mozilla",
        //company_url: "https://www.mozilla.org/",
        //logo_path: "mozilla_logo.png",
        //duration: "Oct 2019 - May 2020",
        //location: "Kurnool, Andhra Pradesh",
        //description:
        //  "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //color: "#000000",
        //},
        //{
        //title: "Developer Students Club Member",
        //company: "DSC IIITDM Kurnool",
        //company_url:
        //"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //logo_path: "dsc_logo.png",
        //duration: "Jan 2018 - May 2020",
        //location: "Kurnool, Andhra Pradesh",
        //description:
        //  "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //color: "#0C9D58",
        //},
        //{
        //title: "Developer Program Member",
        //company: "Github",
        //company_url: "https://github.com/",
        //logo_path: "github_logo.png",
        // duration: "July 2019 - PRESENT",
        //location: "Work From Home",
        //description:
        //  "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        // color: "#181717",
        //},
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "GSOC-23 Internet Archieve.Org Project",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        " WARI is a powerful tool that allows you to easily find and access reliable sources for your Wikipedia articles. With WARI, you can quickly search through a vast collection of books, articles, and other resources, all in one convenient platform. ",
      url:
        "https://www.researchgate.net/publication/369799576_Internet_ArchieveOrg",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "THE TOR PROJECT ",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "The Development of a Tor Browser plugin for anonymous file sharing project aims to create a plugin that will allow Tor users to share files anonymously and securely. ",
      url:
        "https://www.researchgate.net/publication/369799303_GSOC_2023_THE_TOR_PROJECT_PROPOSAL_Dear_Tor_Project_Team_Google_Summer_of_Code_Team",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "stackdevsamarth_img.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blog.samarthmishra.xyz/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kanpur, Uttar Pradhesh, India - 208001",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://goo.gl/maps/TCQWTuDaEiaTg3pw8?coh=178572&entry=tt",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
