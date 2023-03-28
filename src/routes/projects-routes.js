const { response } = require("express");

const express = require("express");

const router = express.Router();

const projects = [
  {
    id: 1,
    title: "Stocky-app",
    description: `Add new products, edit and delete them.
    %100 Responsive. Downlaod the products table in excel format`,
    tecnologies: `ReactJs, SweetAlert2, Node.js, Express, Axios, ApiContext, MongodbAtlas, Chart2.js, `,
    image: "https://i.ibb.co/fHBKJS6/stokcy-app.png",
    url: "https://github.com/farbuscoder/stocky-app-farbuscoder",
  },
  {
    id: 2,
    title: "Foddit",
    description: `Search and add to menu cart your preferred dishes`,
    tecnologies: `React Js, SweetAlert, Api Context, Axios, Api Fetching`,
    image: "https://i.ibb.co/7zmCB2J/fooddit2.png",
    url: "https://github.com/farbuscoder/Challenge-frontend-Alkemy",
  },
  {
    id: 3,
    title: "Virtual Medical",
    description: `Book an appointment with the Doctor using Virtual Medical App `,
    tecnologies:"ReactJs, Formik, Css, React-Bootstrap",
    image: "https://i.ibb.co/GQ3M15r/Capture.jpg",
    url: "https://github.com/farbuscoder/Virtual-Medical-App---React.js",
  },
  {
    id: 4,
    title: "Go-scrum",
    description: `Create tasks and order them depending on their necessity`,
    tecnologies: `React.js, formik, yup, css, node.js, Redux, React Redux, framer-motion`,
    image: "https://i.ibb.co/C5ZG23Y/tutarea.png",
    url: "https://github.com/farbuscoder/Go-scrum",
  },
];

router.get("/", (req, res) => {
  res.json(projects);
});

module.exports = router;
