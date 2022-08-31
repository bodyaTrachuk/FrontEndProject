import React, { useEffect } from "react";
import "./Actions.css";
import { data } from "./actionData";


import Fade from "react-reveal/Zoom";

function ActionPage() {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="action-content">
      <div className="action-section">
        <p className="action-title">Акції</p>
      </div>

      <div className="action-card">
        <Fade>
          {data.map((items) => {
            return (
              <div className="card-action" key={Math.random() * 123}>
                <a href="##">
                  <img src={items.url} alt="img" />
                </a>
                <button className="action-button">{items.buttonTitile}</button>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}

export default ActionPage;
