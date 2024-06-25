import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{marginTop:"150px"}}>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
