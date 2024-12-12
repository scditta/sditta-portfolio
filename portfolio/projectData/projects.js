import ROS_Image from "./images/ROS_Image.jpg";

const projects = [
  {
    id: 0,
    name: "Restaurant Ordering System",
    skills: [
      "React.js",
      "React BootStrap",
      "Axios",
      "Express.js",
      "NoSQL (MongoDB)",
      "Bcrypt",
    ],
    image: ROS_Image,
    links: [
      {
        src: "https://restaurantorderingsystem.netlify.app/",
        type: "Live Link",
      },
      {
        src: "https://github.com/scditta/restaurant-ordering-system-frontend",
        type: "GitHub Front-End",
      },
      {
        src: "https://github.com/paulkim26/restaurant-order-system-backend",
        type: "GitHub Back-End",
      },
    ],
    body: "test body",
    video: null,
    prio: "L",
  },
  {
    id: 1,
    name: "Project2",
    skills: ["React Native", "Google Firebase"],
    image: ROS_Image,
    links: ["https://restaurantorderingsystem.netlify.app/"],
    body: "",
    video: null,
    prio: "S",
  },
  {
    id: 2,
    name: "Project3",
    skills: ["React", "BootStrap"],
    image: ROS_Image,
    prio: "S",
  },
  // {
  //   id: 3,
  //   name: "Project4",
  //   skills: ["React", "BootStrap"],
  //   image: "./images",
  //   prio: "S",
  // },
  // {
  //   id: 4,
  //   name: "Project5",
  //   skills: ["React", "BootStrap"],
  //   image: "./images",
  //   prio: "L",
  // },
  // {
  //   id: 5,
  //   name: "Project6",
  //   skills: ["React", "BootStrap"],
  //   image: "./images",
  //   prio: "M",
  // },
];

export default projects;
