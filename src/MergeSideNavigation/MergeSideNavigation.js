import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/icon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Image from "../Image/Image";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "rgba(244, 246, 250, 0.5)",
  },

  listItem:{
    '&.Mui-selected': {
      borderLeft: "3px solid",
      borderLeftColor: theme.palette.decoration.main,
      backgroundColor: "#ffffff",
      color: "#000000"
    },
    '&.MuiPaper-root':{
      
    }
  },

  icon:{
    // marginLeft: "-8px",
    marginRight: "16px",
    color: "#2684FF"
  },
  listItemText: {
    letterSpacing: "1px",
    fontWeight: 500
  },
  subList: {
    backgroundColor: "#ffffff",
    "& .MuiButtonBase-root":{
      color: "#5f6368",
      "&.Mui-selected":{
        color: "#2684FF"
      }
    },

    // borderBottom: "#e8e8e8 1px solid",
    "&.withIcon .MuiButtonBase-root":{
      paddingLeft: "36px",
    },
    "&.MuiList-root":{
      borderBottom: "#e8e8e8 1px solid",
      paddingBottom: "24px",
    },
    "& .MuiListItem-root": {
      paddingTop: "4px",
      paddingBottom: "4px"
    },

  },
  rootLevel:{
      "&.Mui-selected": {
        backgroundColor: "transparent",
        borderBottom: "#e8e8e8 4px solid",
        borderLeft: "none",
      }
  },

  subLevel:{
    "&.Mui-selected": {
      backgroundColor: "transparent",
      borderBottom: "green 4px solid"
    }
  },
  collapsedLevel0: {
    // borderBottom: "#e8e8e8 4px solid"
  },
  collapsedLevel1:{
    "& .MuiTypography-root":{
      fontWeight: "bold"
    }
  }
}));
function MergeSideNavigation(props) {
  const trigger = useScrollTrigger();
  const classes = useStyles({ trigger });
  const [collapsedIndex, setCollapsedIndex] = useState([null, null, null]);
  const updateByIndex = (val, level) => {
    setCollapsedIndex(
      collapsedIndex.map((item, i) => (i === level ? val : item))
    );
  };
  console.log("iglooSideProps: ", props.menus);

  // eslint-disable-next-line react/prop-types
  const renderItem = (level = 0) => (
    { icon, label, url, submenu, active, opened },
    index
  ) => {
    const collapsed = collapsedIndex[level];
    const listItemText = (
      <ListItemText
        key={label}
        style={{
          paddingLeft: (level - 1) * 8 + (level === 0 ? 0 : 16),
          // marginLeft:  icon && level > 0 ? 20 : 0
        }}
        // selected={active && level > 0 ? true : false}
        
        classes={{ primary: classes.listItemText }}
        primary={label}
      />
    );


    if (!submenu) {
      return (
        <>
          <ListItem
            button
            key={label}
            className={classes.listItem}
            selected={active ? true : false}
            component="a"
            href={url}
            target="_parent"

          >
            {icon && (
              <Icon fontSize="small" className={classes.icon}>
                {icon}
              </Icon>
            )
            }
            {listItemText}
          </ListItem>
          {level === 0 && <Divider light />}
        </>
      );
    }
    
    
    return (
      <>
        <ListItem
          button
          onClick={() =>
            updateByIndex(collapsed === index ? null : index, level)
          }
          className={`${classes.listItem} ${
            level === 0
            ? 
              classes.rootLevel
            : 
              classes.subLevel

          }`}

          

          selected = {active ? true : false}
          level={level}
        >
          {/* {collapsedIndex[level] === index ? (
            <p>is collapsed</p>
          ) : (
            <p>is  not collapsed</p>
          )} */}


          {/* {level} */}
          {icon && (
            <Icon fontSize="small" className={classes.icon}>
              {icon}
            </Icon>
          )}
          {listItemText}
          {collapsedIndex[level] === index ? (
            <Icon>expand_less</Icon>
          ) : (
            <Icon>expand_more</Icon>
          )}
        </ListItem>
        <Collapse
        
          in={
            opened ? (
              true
            ) : (
              collapsedIndex[level] === index
            )
            
          }
          
          timeout="auto"
          unmountOnExit
        >
          <List className={`${classes.subList} ${       
              icon 
                ? "withIcon"
                : null
          }`}
          
          component="div" disablePadding>

            {submenu.map(renderItem(level + 1))}
          </List>
        </Collapse>
        {level === 0 && <Divider light />}
      </>
    );
  };
  return <div className={classes.root}>{props.children}</div>;
}

MergeSideNavigation.propTypes = {
  children: PropTypes.node,
  /**
   * Array of navigation items to display. See below for array structure and information.
   */
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
      submenu: PropTypes.arrayOf(PropTypes.shape({})),
      
    })
  )
};
// IglooSideNavigation.defaultProps = {
//   menus: [
//     {
//       label: "Marketing Services",
//       active: true,
//       opened: true,
//       submenu: [
//         {
//           label: "Branding",
//           submenu: [
//             {
//               label: "Brochures",
//               active: true
//             },
//             {
//               label: "Business Cards"
//             },
//             {
//               label: "Logos"
//             }
//           ]
//         },
//         {
//           label: "Variable Printing",
//           submenu: [
//             {
//               label: "Igen"
//             },
//             {
//               label: "1-to-1"
//             }
//           ]
//         },
//         {
//           label: "Loyalty",
//           active: "true"
//         },
//         {
//           label: "Social Media"
//         }
//       ]
//     },
//     { label: "Data Solutions", icon: "data_usage", active: true },
//     { label: "Technology", icon: "widgets" },
//     { label: "From Side", icon: "bookmark" }
//   ]
// };

export default MergeSideNavigation;
