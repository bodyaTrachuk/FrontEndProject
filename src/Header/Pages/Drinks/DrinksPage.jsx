import React, { useEffect } from "react";
import "./DrinksPage.css";
import { data } from "./data-drinks";
import DrinkHideText from "./DrinkHideText/DrinkHideText";
import DrinkCard from "./DrinkCard";

import Fade from "react-reveal/Fade";

function DrinksPage() {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="Drink-cotainer">
      <Fade bottom>
        <div className="DrinkTitle">
          <p>Напої</p>
        </div>
      </Fade>

      <div className="Drink-card">
        <div className="Drink-card-content">
          <Fade>
            {data.map((data, i) => (
              <DrinkCard
                id={data._id}
                url={data.url}
                title={data.title}
                price={data.price}
                TitlePrice={data.TitlePrice}
                btnText={data.btnText}
                key={Math.random() * 1234}
                i={i}
              />
            ))}
          </Fade>
        </div>
      </div>

      <DrinkHideText />
    </div>
  );
}

export default DrinksPage;
