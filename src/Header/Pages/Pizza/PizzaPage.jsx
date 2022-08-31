import React, { useEffect } from "react";
import Slide from "../../../Slider/Slide";
import "./Pizza.css";
import { data } from "./data";
import HideText from "./HideText/HideText";
import Garmoshka from "./Garmoshka/Garmoshka";
import PizzaCard from "./PizzaCard";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function PizzaPage({ children }) {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="pizza-content">
      <Zoom>
        <Slide />
      </Zoom>

      <Fade bottom>
        <div className="pizza-title">
          <p>Піца</p>
        </div>
      </Fade>

      <div className="cards-block">
        <div className="cards-container">
          <Fade>
            {data.map((data) => (
              <PizzaCard
                key={Math.random() * 1234}
                id={data._id}
                url={data.url}
                url2={data.url2}
                title={data.title}
                description={data.description}
                price={data.price}
                titlePrice={data.titlePrice}
                weight={data.weight}
                weightTitle={data.weightTitle}
                size={data.size}
                sizeTitle={data.sizeTitle}
              />
            ))}
          </Fade>
        </div>
      </div>

      <HideText />
      <Garmoshka />
    </div>
  );
}

export default PizzaPage;
