import { Outlet } from 'react-router-dom';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-body">
        <Aside />
        <main className="main-content">
          <Header />
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
