import { Fragment } from "react";
import PropTypes from "prop-types";

export default function PageTitle({ title, location }) {
  return (
    <Fragment>
      {/*  Single Page Header start - */}
      <div className="columns-1 w-full page-header py-10 space-y-5">
        <h1 className="text-center text-primary text-5xl font-bold">{title}</h1>
        <ol className="breadcrumb flex justify-center gap-5 mb-0 text-lg text-secondary font-light">
          <li className="">
            <a href="#">Home</a>
          </li>
          <li className="text-secondary/50">/</li>
          <li className="">
            <a href="#">Pages</a>
          </li>
          <li className="text-secondary/50">/</li>
          <li className="breadcrumb-item active text-white">{location}</li>
        </ol>
      </div>
    </Fragment>
  );
}
PageTitle.propTypes = {
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

  title: PropTypes.string,
  location: PropTypes.string,
};
