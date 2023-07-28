import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "./heading";
import Layout from "./layout";
import Card from "./card";
import sinf from "../images/sinf.webp";
import winerd from "../images/winerd.webp";
import episa from "../images/episaProject.webp";
import va from "../images/va.webp";
import { useWindowSize } from "../hooks/window-size";

const useStyles = createUseStyles({
  contentDiv: {
    paddingTop: "4em",
    marginBottom: "5em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ({ device }) => {
      if (device === "desktop") {
        return "repeat(3, 1fr)";
      } else if (device === "tablet") {
        return "repeat(2, 1fr)";
      }
      return "1fr";
    },
    gridGap: "10px",
    justifyContent: "center",
  },
});

export const Projects = () => {
  const device = useWindowSize();
  const styles = useStyles({ device });

  return (
    <Layout>
      <div id="projects" className={styles.contentDiv}>
        <Heading title="Projects" />

        <div className={styles.grid}>
          <Card
            title="Project 1"
            description="description of the project 1."
            keywords={[
              { id: 1, kw: "React Native" },
              { id: 2, kw: "Node.js" },
              { id: 3, kw: "Express" },
              { id: 4, kw: "Firebase" },
              { id: 5, kw: "MongoDB" },
            ]}
          />

          <Card
            title="Project 2"
            description="
                        description of the project 2.
                        "
            keywords={[
              { id: 1, kw: "PHP" },
              { id: 2, kw: "Laravel" },
              { id: 3, kw: "HTML/CSS" },
              { id: 4, kw: "PostgreSQL" },
              { id: 5, kw: "Gitlab CI/CD" },
            ]}
          />

          <Card
            title="Project 3"
            image={winerd}
            description="description of the project 3."
            linkGithub="https://github.com/[...]"
            keywords={[
              { id: 1, kw: "Node/Express" },
              { id: 2, kw: "PostgreSQL" },
              { id: 3, kw: "React" },
              { id: 4, kw: "Gatsby" },
              { id: 5, kw: "MaterialUI" },
            ]}
          />

          <Card
            title="Project 4"
            image={va}
            description="description of the project 4."
            linkGithub="https://github.com/[...]"
            keywords={[
              { id: 1, kw: "JavaScript" },
              { id: 2, kw: "D3.js" },
              { id: 3, kw: "HTML/CSS" },
              { id: 4, kw: "Python" },
            ]}
          />

          <Card
            title="Poject 5"
            image={sinf}
            description="description of the project 5."
            linkWebsite="https://addressofthewebsite/"
            linkGithub="https://github.com/[]"
            keywords={[
              { id: 1, kw: "UX/UI" },
              { id: 2, kw: "Illustrator" },
              { id: 3, kw: "Photoshop" },
              { id: 4, kw: "XD" },
              { id: 5, kw: "React" },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
