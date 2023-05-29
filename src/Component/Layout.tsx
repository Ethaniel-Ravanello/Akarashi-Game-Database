import React, { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { clearFilter } from "../features/searchSlice";

import Navbar from "./Navbar";
import { toggleRefetch } from "../features/refetchSlice";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname !== "/search") {
      dispatch(clearFilter());
    }
    dispatch(toggleRefetch());
  }, [location.pathname, dispatch]);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
