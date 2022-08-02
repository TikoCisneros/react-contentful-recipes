import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.css";
import Logo from './Logo';

const Layout = () => {
  return (
    <div className={`bg-gray-100 min-h-screen ${styles.layout}`}>
      <div className="max-w-7xl m-auto pt-6">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
