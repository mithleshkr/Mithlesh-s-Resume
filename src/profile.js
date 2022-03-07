// Change website animations

const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Mithlesh Kumar",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "React JS",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    //svg: "",
    faClass: "fab fa-react",
  },
  {
    name: "Javascript",
     svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "HTML",
    // svg: '',
    faClass: "fa fa-html5",
  },
  
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  }
 
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Admin Management",
    skills: ["REACT JS, APIS, JSON-SERVER, MATERIAL-UI"],
    url: "https://github.com/mithleshkr/Food-Admin-Web-App",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Crime Alert",
    skills: ["REACT JS, FIREBASE, MATERIAL-UI"],
    url: "https://github.com/mithleshkr/CRIME-ALERT-WITH-FIREBASE",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Prospect Encore",
    skills: ["PYTHON, MYSQL"],
    url: "https://github.com/mithleshkr/prospect-encore",
  },
  
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// const section4Title = "Miscellaneous";
// const miscellaneous = [
//   {
//     // Add image in './styles/images.css' in #misc1
//     id: "misc1",
//     name: "Miscellaneous 1",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc2
//     id: "misc2",
//     name: "Miscellaneous 2",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc3
//     id: "misc3",
//     name: "Miscellaneous 3",
//     url: "https://github.com/kaustubhai",
//   },
// ];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "You can find me here",
  copyright: "Mithlesh Kumar",
  contactUrl: "https://formspree.io/f/xvolrveg",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/mithleshkr",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com/in/mithlesh-kumar-aa467214b",
  
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  
  contact,
  social,
  section2title,
  section3Title,
  
  section5Title,
};
