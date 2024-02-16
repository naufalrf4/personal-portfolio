export const navLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  // { name: "blogs", path: "/blogs" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        title: "Computer Engineering",
        subtitle: "IPB University",
        date: "2022 - present",
      },
      {
        title: "Computer and Network Engineering",
        subtitle: "SMK Nasional Depok",
        date: "2019 - 2022",
      },
    ],
  },
  {
    title: "work",
    data: [
      {
        company: "Himavo Micro IT",
        qualification: "Webmaster Mentorship",
        date: "2024 - Present",
      },
      {
        company: "PT Bank BTPN Tbk",
        qualification:
          "PBI: Fullstack Developer BTPN Syariah x Rakamin Academy",
        date: "2022",
      },
      {
        company: "PT. Miftah Putra Mandiri",
        qualification: "Student Internship",
        date: "2021",
      },
    ],
  },
  {
    title: "organizational",
    data: [
      {
        company: "Obscura Photography Club",
        qualification: "Staff",
        date: "2023 - present",
      },
      {
        company: "Agrimovie Filmmaker Club",
        qualification: "Staff",
        date: "2022 - present",
      },
      {
        company: "Himavo Micro IT",
        qualification: "Staff",
        date: "2022 - 2023",
      },
    ],
  },
];

export const skillData = [
  {
    title: "skills",
    data: [
      {
        title: "Frontend",
        data: [
          {
            name: "HTML",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            icon: "/images/icons/html.svg",
          },
          {
            name: "CSS",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            icon: "/images/icons/css.svg",
          },
          {
            name: "Javascript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            icon: "/images/icons/javascript.svg",
          },
          {
            name: "Typescript",
            href: "https://www.typescriptlang.org/",
            icon: "/images/icons/typescript.svg",
          },
          {
            name: "React",
            href: "https://reactjs.org/",
            icon: "/images/icons/react.svg",
          },
          {
            name: "Next.js",
            href: "https://nextjs.org/",
            icon: "/images/icons/nextjs.svg",
          },
          {
            name: "Tailwind CSS",
            href: "https://tailwindcss.com/",
            icon: "/images/icons/tailwindcss.svg",
          },
          {
            name: "Bootstrap",
            href: "https://getbootstrap.com/",
            icon: "/images/icons/bootstrap.svg",
          },
        ],
      },
      {
        title: "Backend",
        data: [
          {
            name: "PHP",
            href: "https://www.php.net/",
            icon: "/images/icons/php.svg",
          }
          ,
          {
            name: "Laravel",
            href: "https://laravel.com/",
            icon: "/images/icons/laravel.svg",
          },
          {
            name: "Node.js",
            href: "https://nodejs.org/en/",
            icon: "/images/icons/nodejs.svg",
          },
          {
            name: "Express.js",
            href: "https://expressjs.com/",
            icon: "/images/icons/expressjs.svg",
          },
          {
            name: "MySQL",
            href: "https://www.mysql.com/",
            icon: "/images/icons/mysql.svg",
          },
          {
            name: "Firebase",
            href: "https://firebase.google.com/",
            icon: "/images/icons/firebase.svg",
          },

        ],
      },
      {
        title: "Others",
        data: [
          {
            name: "Git",
            href: "https://git-scm.com/",
            icon: "/images/icons/git.svg",
          },
          {
            name: "Github",
            href: "https://github.com",
            icon: "/images/icons/github.svg",
          },
          {
            name: "Arduino",
            href: "https://www.arduino.cc/",
            icon: "/images/icons/arduino.svg",
          },
          {
            name: "Linux",
            href: "https://www.linux.org/",
            icon: "/images/icons/linux.svg",
          },
          {
            name: "Docker",
            href: "https://www.docker.com/",
            icon: "/images/icons/docker.svg",
          },
          {
            name: "Figma",
            href: "https://www.figma.com/",
            icon: "/images/icons/figma.svg",
          },
          {
            name: "Adobe Photoshop",
            href: "https://www.adobe.com/en/products/photoshop",
            icon: "/images/icons/photoshop.svg",
          },
          {
            name: "Adobe Illustrator",
            href: "https://www.adobe.com/en/products/illustrator",
            icon: "/images/icons/illustrator.svg",
          },
        ],
      },
    ],
  },
];

export const projectData = [
  {
    image: "/images/projects/semapor-1.png",
    image1: "/images/projects/semapor-2.png",
    category: "Web",
    title: "Semapor",
    description: "Semapor (Semarang Lapor) is a modern application designed to enhance community involvement in improving Semarang City. Focused on reporting and monitoring issues within the city, Semapor offers convenient access through its website-based platform. The goal is to streamline the urban problem reporting process and ensure efficient follow-up actions. By utilizing Laravel and MySQL for web development, along with Express.js for WhatsApp notification services and Bootstrap for styling, Semapor aims to increase community participation by addressing reporting and monitoring obstacles while enhancing transparency and accountability in addressing city issues.",
    link: "https://semapor.thena.my.id/",
    github: "/",
  },
  {
    image: "/images/projects/festida-1.png",
    image1: "/images/projects/festida-2.png",
    category: "Web",
    title: "IslamicVerse",
    description: "IslamicVerse is a groundbreaking application that offers convenient schedules, interactive AI chatbots, and up-to-date Islamic news. It not only guides users in daily worship but also integrates religious values with scientific elements. Developed with HTML and Bootstrap, with Express.js powering the AI chatbot server, IslamicVerse provides immersive experiences, fostering a thoughtful approach to living an Islamic life infused with scientific understanding.",
    link: "https://islamicverse.thena.my.id/",
    github: "https://github.com/naufalrf4/islamicverse",
  },
  {
    image: "/images/projects/personal-1.png",
    image1: "/images/projects/personal-2.png",
    category: "Web",
    title: "Personal Portfolio",
    description: "The Personal Portfolio website showcases projects, qualifications, and a biography in an elegant and accessible way. It uses arrays for organized data management and sleek Tailwind CSS styling, providing a smooth and visually appealing experience. Developed with Next.js, it highlights the creator's skills and achievements while showcasing proficiency in modern web development technologies. Whether for clients, employers, or networking, this portfolio aims to make a lasting impression and effectively communicate the creator's talents and expertise.",
    link: "https://naufalrf.tech",
    github: "https://github.com/naufalrf4/personal-portfolio",
  },
  {
    image: "/images/projects/winscraft-1.png",
    image1: "/images/projects/winscraft-2.png",
    category: "Web",
    title: "Winscraft",
    description: "Winscraft is a captivating Catalog Product Website specializing in knitted dolls. The purpose of this website creation was fourfold: To provide an attractive, user-friendly, and secure online store for Winscraft. To enhance the visibility and traffic of Winscraft's online store on search engines. To measure customer satisfaction and loyalty through the online store website. To boost conversion rates and sales of Winscraft's knitted doll products through the online store. Developed using Next.js and Sanity for CMS, Winscraft offers a seamless browsing and shopping experience for customers while effectively meeting the objectives outlined for its creation.",
    link: "https://winscraft.naufalrf.tech/",
    github: "https://github.com/naufalrf4/winscraft",
  },
  {
    image: "/images/projects/dokaw-1.png",
    image1: "/images/projects/dokaw-2.png",
    category: "Web",
    title: "Dokaw",
    description: "Dokaw (Unfinished, Discontinued) was an AI-powered web application aimed at providing cocoa farmers with solutions for detecting and classifying diseases in their cocoa plants. Utilizing Computer Vision technology for image classification, the application allowed farmers to quickly upload images of cocoa plants suspected of disease and receive accurate disease classification results. Through the utilization of AI, the application could precisely identify the type of disease affecting cocoa plants based on uploaded images. Additionally, it provided clear and easily understandable information on the steps to manage the identified diseases, thereby assisting farmers in taking prompt and appropriate actions to prevent disease spread to other plants and minimize resulting losses. With this application, the goal was to enhance cocoa harvest productivity and quality by empowering farmers to take effective disease management measures, ultimately reducing losses caused by undetected disease outbreaks. Dokaw was developed using Next.js.",
    link: "https://dokaw.naufalrf.tech/",
    github: "https://github.com/naufalrf4/dokterkakao",
  },
];
