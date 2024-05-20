import { createPortal } from "react-dom";

const headRoot = document.head;
const Head = ({ children }) => {
  return createPortal(children, headRoot);
};

export default Head;
