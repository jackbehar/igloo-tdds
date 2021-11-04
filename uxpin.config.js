module.exports = {
    components: {
      categories: [
        {
          name: "Layout",
          include: [
            "src/Box/Box.js",
            "src/Grid/Grid.js",
            "src/GridList/GridList.js",
            "src/Hidden/Hidden.js"
          ]
        },
        {
          name: "Inputs",
          include: [
            "src/Button/Button.js",
            "src/IconButton/IconButton.js",
            "src/Checkbox/Checkbox.js",
            "src/CheckboxWithLabel/CheckboxWithLabel.js",
            "src/Fab/Fab.js",
            "src/Radio/Radio.js",
            "src/RadioWithLabel/RadioWithLabel.js",
            "src/RadioGroup/RadioGroup.js",
            "src/Select/Select.js",
            "src/TextField/TextField.js",
            "src/Switch/Switch.js",
            "src/SwitchWithLabel/SwitchWithLabel.js",
            "src/Collapse/Collapse.js"
          ]
        },
        {
          name: "Navigation",
          include: [
            "src/BottomNavigation/BottomNavigation.js",
            "src/Drawer/Drawer.js",
            "src/Link/Link.js",
            "src/Menu/Menu.js",
            "src/TabsWithPanel/TabsWithPanel.js",
            "src/CollapsePanel/CollapsePanel.js",
          ]
        },
  
        {
          name: "Surfaces",
          include: [
            "src/Paper/Paper.js",
            "src/Card/Card.js",
          ]
        },
  
        {
          name: "Feedback",
          include: [
            "src/CircularProgress/CircularProgress.js",
            "src/LinearProgress/LinearProgress.js",
            "src/Dialog/Dialog.js",
            "src/Banner/Banner.js",
          ]
        },
        {
          name: "Data Display",
          include: [
            "src/Avatar/Avatar.js",
            "src/Badge/Badge.js",
            "src/Chip/Chip.js",
            "src/Divider/Divider.js",
            "src/Icon/Icon.js",
            "src/Image/Image.js",
            "src/List/List.js",
            "src/Table/Table.js",
            "src/Tooltip/Tooltip.js",
            "src/Typography/Typography.js",
          ]
        },
        {
          name: "Parts",
          include: [
            "src/GridListTile/GridListTile.js",
            "src/GridListTileBar/GridListTileBar.js",
            "src/CardActions/CardActions.js",
            "src/CardContent/CardContent.js",
            "src/CardHeader/CardHeader.js",
            "src/CardMedia/CardMedia.js",
            "src/DialogTitle/DialogTitle.js",
            "src/DialogContentText/DialogContentText.js",
            "src/DialogContent/DialogContent.js",
            "src/DialogActions/DialogActions.js",
            "src/ListItem/ListItem.js",
            "src/ListItemAvatar/ListItemAvatar.js",
            "src/ListItemIcon/ListItemIcon.js",
            "src/ListItemSecondaryAction/ListItemSecondaryAction.js",
            "src/ListItemPrimaryAction/ListItemPrimaryAction.js",
            "src/ListItemText/ListItemText.js",
            "src/ListSubheader/ListSubheader.js",
            "src/BottomNavigationAction/BottomNavigationAction.js",
            "src/Tabs/Tabs.js",
            "src/Tab/Tab.js",
            "src/TabContent/TabContent.js",
            "src/Toolbar/Toolbar.js",
            "src/AppBar/AppBar.js",
            "src/MenuItem/MenuItem.js",
            "src/MenuList/MenuList.js",
            "src/InputLabel/InputLabel.js",
            "src/FormControl/FormControl.js",
            "src/FormHelperText/FormHelperText.js",
            "src/FormGroup/FormGroup.js",
            "src/FormControlLabel/FormControlLabel.js",
            "src/FormLabel/FormLabel.js",
            "src/ExpansionPanel/ExpansionPanel.js",
            "src/ExpansionPanelActions/ExpansionPanelActions.js",
            "src/ExpansionPanelDetails/ExpansionPanelDetails.js",
            "src/ExpansionPanelSummary/ExpansionPanelSummary.js",
  
          ]
        },
        {
          name: "Templates",
          include: [
            "src/MergeHeader/MergeHeader.js",
            "src/MergeSideNavigation/MergeSideNavigation.js",
            "src/MergeMainContent/MergeMainContent.js",
          ]
        },
        {
          name: "Tools",
          include: [
            "src/ThemeSwitcher/ThemeSwitcher.js",
            "src/DeviceViewer/DeviceViewer.js",
          ]
        }
      ],
      wrapper: './src/Wrapper/UXPinWrapper.js',
      webpackConfig: './webpack.config.js',
    },
    name: "Merge Design System"
  };
  