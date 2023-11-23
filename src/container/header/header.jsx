import React from "react";
import group from "../../assets/Group 81.png";
import illustration from "../../assets/Illustration.png";
import "./header.css";

// 左右布局

const Header = () => {
  return (
    <div>
      <div className="header_text-pic">
        <div className="header_text-pic_text">
          <div className="header_text-pic_text_title">
            Let’s Build Something amazing with GPT-3 OpenAI
          </div>
          <div className="header_text-pic_text_content">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </div>
          <div className="header_text-pic_text_email">
            <input type="text" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>
          <div className="header_text-pic_text_people">
            <img src={group} alt="" />
            <p> 1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="header_text-pic_img">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
