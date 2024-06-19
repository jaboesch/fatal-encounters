import React from "react";
import Nav from "./nav";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootContainer = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Nav />
      {children}
    </div>
  );
};

export default RootContainer;
