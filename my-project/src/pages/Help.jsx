import React from "react";
import "./help.css";
import help from "../assets/help.jpg";

export const Help = () => {
  return (
    <div className="help">
      <img src={help} alt="" />
      <div className="frequent-questions">
        {" "}
        <h1>Help Center</h1>
        <div className="questions">
          <div className="question">
            <button>
              <p>how to post a car?</p>
            </button>
          </div>
          <div className="question">
            <button>
              <p>how to delete an account?</p>
            </button>
          </div>
          <div className="question">
            <button>
              <p>how to login?</p>
            </button>
          </div>
          <div className="question">
            <button>
              <p>can I see before buy?</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
