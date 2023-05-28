import React, { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { clearFilter } from "../features/searchSlice";

import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFilter());
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
