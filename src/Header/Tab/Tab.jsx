import React from "react";
import "./Tab.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Icon1 } from "../../img/menu-icon-1.svg";
import { ReactComponent as Icon2 } from "../../img/menu-icon-2.svg";
import { ReactComponent as Icon3 } from "../../img/menu-icon-3.svg";
import { ReactComponent as Deserty } from "../../img/deserty.svg";
import { ReactComponent as Icon4 } from "../../img/menu-icon-4.svg";
import { ReactComponent as Icon5 } from "../../img/menu-icon-5.svg";

function Tab() {

  return (
    <div className="tab-container">
      <nav>
        <li className="hoverLi">
          <NavLink to="/action">
            <Icon1 alt="icon" />
            <p>Ації</p>
          </NavLink>
        </li>
       
        <li className="hoverLi">
          <NavLink to="/pizza">
            <Icon2 alt="icon" />
            <p>Піцци</p>
          </NavLink>
        </li>
        <li className="hoverLi">
          <NavLink to="/salads">
            <Icon3 alt="icon" />
            <p>Салати</p>
          </NavLink>
        </li>
        <li className="hoverLi">
          <NavLink to="/desserts">
            <Deserty alt="icon" />
            <p>Десерти</p>
          </NavLink>
        </li>
        <li className="hoverLi">
          <NavLink to="/drinks">
            <Icon4 alt="icon" />
            <p>Напої</p>
          </NavLink>
        </li>
        <li>
          <div>
            <Icon5 alt="icon" />
            <p>Інформація</p>
          </div>

          <ul className="hoverText">
            <li>
              <a href="##">Франшиза</a>
            </li>
            <li>
              <a href="##">Доставка</a>
            </li>
            <li>
              <a href="##">Оплата</a>
            </li>
            <li>
              <a href="##">Про нас</a>
            </li>
            <li>
              <a href="##">Новини</a>
            </li>
            <li>
              <a href="##">Оферта</a>
            </li>
            <li>
              <a href="##">Для партнерів</a>
            </li>
            <li>
              <a href="##">Вкансії</a>
            </li>
            <li>
              <a href="##">Контакти</a>
            </li>
            <li>
              <a href="##">Donate</a>
            </li>
          </ul>
        </li>
      </nav>
    </div>
  );
}

export default Tab;
