// Header.jsx or Header.tsx
import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return <header className="w-full flex justify-center">{children}</header>;
}

export default Header;
