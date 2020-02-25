import React from "react";
import { create } from "jss";
import { jssPreset } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import Frame, { FrameContextConsumer } from "react-frame-component";
import Button from '../ButtonUXP/ButtonUXP';
import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import igloo from "../ThemeSwitcher/themes/igloo";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "667px"
  }
}));

let theme = createMuiTheme(igloo);



const CustomHead = props => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Previewer</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <base target="_parent" />

      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
      id="mui-merge-font"/>

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
      id="mui-merge-icons"/>
    </>
  );
};

const PreviewFrame = ({ children, ...props }) => {
  
  
// const StyledButton = styled(Button)`
// color: white;
// background-color: blue;
// height: 80px;
// `

const classes = useStyles();


  return (
    <Frame frameBorder={0} {...props} head={<CustomHead />}
    style={{
      width: "100%",
      // height: "100%",
      border: "1px solid #ccc",
      backgroundColor: "#ffffff"
    }}
    sandbox =
        "allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-scripts"
    >
      <FrameContextConsumer>
        {({ document, window }) => {
          const jss = create({
            plugins: [...jssPreset().plugins],
            insertionPoint: document.head
          });
          document.body.style.backgroundColor = "#ffffff";
          return (
            <StylesProvider jss={jss}>
              <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
              </ThemeProvider>
            </StylesProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default PreviewFrame;

PreviewFrame.propTypes = {
  children: PropTypes.node,
  frameWidth: PropTypes.number,
  frameHeight: PropTypes.number
}

// PreviewFrame.propTypes = {
//   children: PropTypes.node,
//   active: PropTypes.bool,
//   defaultView: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
//   desktopOption: PropTypes.bool,
//   tabletOption: PropTypes.bool,
//   mobileOption: PropTypes.bool
// };


