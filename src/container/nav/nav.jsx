import logo from "../../assets/GPT-3.svg";
import "./nav.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState, React } from "react";

// logo
// links  移动端的时候消失
// login
// menu: icon 移动端展示
// menu: links 点击icon展示或者隐藏

// data
// isCollape  -> 点击 -> menu icon 切换
//                  -> menu item 展示
const Menu = () => {
  return (
    <>
      <p>
        <a href="/">Home</a>
      </p>

      <p>
        <a href="/what-is-gpt">What is GPT?</a>
      </p>

      <p>
        <a href="/open-ai">Open AI</a>
      </p>
      <p>
        <a href="/case-studies">Case Studies</a>
      </p>
      <p>
        <a href="/library">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [isCollape, setIsCollape] = useState(false);
  return (
    <div className="nav section__padding">
      <div className="nav_logo-links">
        <div className="nav_logo-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_logo-links_links">
          <Menu></Menu>
        </div>
      </div>

      <div className="nav_login">
        <p>
          <a href="/#">Sign up</a>
        </p>
        <button type="button">Sign in</button>
        <div className="nav_mobile_menu">
          {isCollape ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setIsCollape(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => {
                setIsCollape(true);
              }}
            />
          )}

          {isCollape && (
            <div className="nav_mobile_menu_links">
              <Menu></Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
