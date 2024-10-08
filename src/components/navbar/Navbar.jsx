import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >

        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/share/HFDy6MSWDUMLtxjF/?mibextid=qi2Omg">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/_ommittal/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/om-mittal-4a164b22b/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/OMRAKESHMITTAL">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
