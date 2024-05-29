import React, { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <main className="container py-24 lg:py-32">{children}</main>;
};

export default MainContent;
