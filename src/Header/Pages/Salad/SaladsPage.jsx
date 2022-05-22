import React, { useEffect } from "react";
import "./SaladsPage.css";
import { data } from "./dataSalad";
import TextHideSalad from "./TextHideSalad/TextHideSalad";
import SaladCard from "./SaladCard";

import Fade from "react-reveal/Fade";


function SaladsPage() {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="salad-container">
      <Fade bottom>
        <div className="salad-title">
          <p>Салати</p>
        </div>
      </Fade>

      <div className="salad-card">
        <div className="salad-content">
          <Fade>
            {data.map((data) => (
              <SaladCard
                id={data.id}
                url={data.url}
                ulr2={data.ulr2}
                title={data.title}
                description={data.description}
                price={data.price}
                titlePrice={data.titlePrice}
                weight={data.weight}
                weightTitle={data.weightTitle}
                key={Math.random() * 1324}
              />
            ))}
          </Fade>
        </div>
      </div>

      <TextHideSalad />
    </div>
  );
}

export default SaladsPage;
