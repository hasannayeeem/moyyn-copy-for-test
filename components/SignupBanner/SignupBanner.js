import React from "react";
import { faHandPointRight } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHandPointRight } from "react-icons/fa";

function SignupBanner() {
  return (
    <div className="signup-bnr-wrapper">
      <div className="signup-bnr">
        <div className="signup-bnr_top">
          <div className="signup-bnr_top_text">
            <h1 className="signup-bnr_top_text_tittle">
              Ready to hire your next talent in 15 days?
            </h1>
            <p className="signup-bnr_top_text_paragraph">Signup for free now!</p>
            <a className="signup-bnr_top_text_button" href="">
              <span className="signup-bnr_top_text_button_icon-wrapper">
                <FaRegHandPointRight className="signup-bnr_top_text_button_icon" />
              </span>
              <span>Signup</span>
            </a>
          </div>
          <div className="signup-bnr_top_image">
            <img
              className="signup-bnr_top_image-png"
              src="https://moyyn.com/wp-content/uploads/2020/05/thumbs-up.png"
            />
          </div>
          <div className="signup-bnr_top_svg-wrapper"><svg
            className="signup-bnr_top_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              d="M738,99l262-93V0H0v5.6L738,99z"
            ></path>
          </svg></div>
        </div>
      </div>
    </div>
  );
}

export default SignupBanner;
