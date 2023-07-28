/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "../heading";
import Layout from "../layout";
import { useWindowSize } from "../../hooks/window-size";
import PhotoBlobs from "./photoblobs";

const useStyles = createUseStyles({
  contentDiv: {
    paddingTop: "4em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&.fitContent": {
      minHeight: "fit-content",
      margin: "0 1em",
    },
    "&.desktop": {
      height: "100vh",
      margin: "0 1em",
    },
  },
  verticalDisplay: {
    flexDirection: "column",
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "68ch",
    fontSize: "20px",
    flexGrow: 1,
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "2em",
  },
  aboutMeLink: {
    margin: "0 0.5em",
  },
});

export const AboutMe = () => {
  const classes = useStyles();
  const desktop = useWindowSize() === "desktop";

  return (
    <Layout>
      <div
        id="aboutme"
        className={
          desktop
            ? `${classes.contentDiv} desktop`
            : `${classes.contentDiv} fitContent`
        }
      >
        <div className={classes.textContent}>
          <Heading title="About Me" />
          <div>
            <p>
              Hey there! My name is [...] and I’m a software engineer based in
              [...], Canada.
            </p>
            <p>I’m currently [...] I am interested in [...].</p>
            <p>My main interests are [...].</p>
            <p>Some of my hobbies include [...]. Also I like [...].</p>
          </div>
        </div>
        {desktop ? <PhotoBlobs /> : null}
      </div>
    </Layout>
  );
};

export default AboutMe;
