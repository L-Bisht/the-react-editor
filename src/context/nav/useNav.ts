import { useContext } from "react";
import NavContext from "./NavContext";

const useNav = () => {
  const context = useContext(NavContext);
  return context;
};

export default useNav;
