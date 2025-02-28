import { Link } from 'react-scroll';
import { SiReaddotcv } from "react-icons/si";
import { GiHistogram } from "react-icons/gi";
import { FiGithub } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { useState } from 'react';
import '../../styles/SideBar.css';

const SideBar = () => {
    // Collapse the sidebar
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleLinkClick = () => {
          setIsCollapsed((prev) => !prev);
    };
  
    return <section className={`bar ${isCollapsed ? 'collapsed' : ''}`}>
            <ul className={`list_bar ${isCollapsed ? 'collapsed' : ''}`}>
                <li className="linkicone">
                    <Link to="firstPage" smooth={true} duration={1000}>
                        <HiOutlineHome />
                    </Link>
                </li>
                <li className="linkicone">
                    <Link to="about" smooth={true} duration={1000}>
                        <GoPerson />
                    </Link>
                </li>
                <li className="linkicone">
                    <Link to="SkillPage" smooth={true} duration={1000}>
                        <GiHistogram />
                    </Link>
                </li>
                <li className="linkicone">
                    <Link to="formation" smooth={true} duration={1000}>
                        <IoSchoolOutline />
                    </Link>
                </li>
                <li className="linkicone">
                    <Link to="project" smooth={true} duration={1000}>
                        <FiGithub />
                    </Link>
                </li>
                <li className="linkicone">
                    <Link to="contact" smooth={true} duration={1000}>
                        <IoMailOutline />
                    </Link>
                </li>
                <li className="linkicone">
                    <a href="/CV_Angelo_Adragna_2025.pdf" download="CV_Angelo_Adragna_2025.pdf">
                        <SiReaddotcv />
                    </a>
                </li>
                <li
                    onClick={handleLinkClick}
                    className={`arrow-icon ${isCollapsed ? 'rotated' : 'linkicone'}`}>
                    <IoIosArrowForward />
                </li>
            </ul>
            </section>;
};

export default SideBar;
