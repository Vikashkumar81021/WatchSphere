import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types"; // Import PropTypes
import { ToastContainer } from "react-toastify";
const Layout = ({
  children,
  title,
  description,
  keywords,
  author,
  viewport,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content={viewport} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </>
  );
};

// Define prop types for the Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Specify children as a node type and required
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  viewport: PropTypes.string,
};

// Default props for the Layout component
Layout.defaultProps = {
  title: "WatchSphere - Shop Now",
  description: "A MERN stack project for a watch store",
  keywords: "mern,react,node,mongodb,watch store",
  author: "Vikash Kumar",
  viewport: "width=device-width, initial-scale=1.0",
};

export default Layout;
