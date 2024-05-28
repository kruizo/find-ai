// MainContent.jsx or MainContent.tsx
import React, { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <main className="main-content">{children}</main>;
};

export default MainContent;
