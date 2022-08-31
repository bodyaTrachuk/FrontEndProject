import React, { useEffect } from "react";
import "./DessertPage.css";
import { data } from "./dessert-data";
import DessertCard from "./DessertCard";

import Fade from "react-reveal/Fade";

function DessertsPage() {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="dessert-container">
      <Fade bottom>
        <div className="title-dessert">
          <p>Десерти</p>
        </div>
      </Fade>

      <div className="dessert-card">
        <Fade>
          {data.map((data, i) => (
            <DessertCard
              id={data._id}
              url={data.url}
              url2={data.url2}
              title={data.title}
              description={data.description}
              tableTitle={data.tableTitle}
              tableItem1={data.tableItem1}
              titleItem1={data.titleItem1}
              tableItem2={data.tableItem1}
              titleItem2={data.titleItem1}
              tableItem3={data.tableItem1}
              titleItem3={data.titleItem1}
              tableItem4={data.tableItem1}
              titleItem4={data.titleItem1}
              price={data.price}
              titlePrice={data.titlePrice}
              btnText={data.btnText}
              absoluteTitle={data.absoluteTitle}
              absoluteDesc={data.absoluteDesc}
              key={Math.random() * 1000000000}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
}

export default DessertsPage;
