import React from "react";

import { Navigation } from "./navigation";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};
