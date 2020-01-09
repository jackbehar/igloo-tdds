import React from "react";
import PropTypes from "prop-types";
import TypographyM from "@material-ui/core/Typography";
import ReactHtmlParser from 'react-html-parser'; 


function Typography(props) {
  return <TypographyM {...props} component={props.component}>
    { ReactHtmlParser (props.children) } </TypographyM>;
}

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf([
    "inherit",
    "left",
    "center",
    "right",
    "justify"
  ]),

  /**
  * The content of the component.
  * @uxpinpropname  Text/HTML
  * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    "default",
    "error",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary"
  ]),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,

  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   * The default mapping is the following:
   */
  headlineMapping: PropTypes.object,

  /**
   *  Controls whether the Typography is inline or not.
   */
  inline: PropTypes.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: PropTypes.string,
  
  /**
   * Applies the theme typography styles.
   * Use `body1` as the default value with the legacy implementation and `body2` with the new one.
   */
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
    "inherit",
  ])
};

export { Typography as default };
