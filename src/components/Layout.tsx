import React from "react";
import styles from "./Layout.module.css";
import Logo from './Logo';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`bg-gray-100 min-h-screen ${styles.layout}`}>
      <div className="max-w-7xl m-auto pt-6">
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default Layout;
