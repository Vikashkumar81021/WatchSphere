import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <div className="bg-dark text-light p-3">
    //   <h4 className="text-center">All Right Reserverd &copy: RoshuCoder</h4>
    // </div>
    <>
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <p>
                We are a company dedicated to providing the best services to our
                customers. Our team is always here to help you.
              </p>
            </div>

            {/* Links Section */}
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="navbar-brand">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="navbar-brand">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="navbar-brand">
                    About us
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 mb-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: info@example.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Main Street, Anytown</li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <p className="mb-0">
              &copy; 2024 Your Company. All rights reserved.
            </p>
            <div>
              <a href="#facebook" className="text-white mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="text-white mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="text-white mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#linkedin" className="text-white mx-2">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
