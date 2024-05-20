import { Fragment } from "react";
import PropTypes from "prop-types";

function HeadContent({ children }) {
  return <Fragment>{children}</Fragment>;
}

export default HeadContent;

HeadContent.propTypes = {
  /**
   *
   * You can declare that a prop is a specific JS primitive. By default, these
   * are all optional.
   * optionalArray: PropTypes.array,
   * optionalBigInt: PropTypes.bigint,
   * optionalBool: PropTypes.bool,
   * optionalFunc: PropTypes.func,
   * optionalNumber: PropTypes.number,
   * optionalObject: PropTypes.object,
   * optionalSymbol: PropTypes.symbol,
   *
   * Anything that can be rendered: numbers, strings, elements or an array
   * (or fragment) containing these types.
   * see https://reactjs.org/docs/rendering-elements.html for more info
   * optionalNode: PropTypes.node,
   * optionalElement: PropTypes.element,
   * title: PropTypes.string,
   *
   *
   */

  children: PropTypes.node,
};
