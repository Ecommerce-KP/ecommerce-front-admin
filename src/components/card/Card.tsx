import React, { useState } from "react";
import { CardType } from "../layouts/main/dashboard/Dashboard";
import CardFilter from "./CardFilter";

import "./card.css";

interface CardInterface {
  card: CardType;
}
const Card = ({ card }: CardInterface) => {
  const [filter, setFilter] = useState<string>("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="col-xxl-4 col-md-6">
      <div className="card info-card sales-card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            {card.name} <span>| {filter}</span>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className={card.icon}></i>
              </div>
              <div className="pst-3">
                <h6>
                  {card.name === "Revenue"
                    ? "$" + card.amount.toLocaleString("en-US")
                    : card.amount.toLocaleString("en-US")}
                </h6>
                <span
                  className={`${
                    card.percentage > 0 ? "text-success" : "text-danger"
                  } small pt-1 fw-bold`}
                >
                  {card.percentage > 0
                    ? card.percentage * 100
                    : -card.percentage * 100}
                  %
                </span>
                <span className="text-muted small pt-2 ps-1">
                  {card.percentage > 0 ? "increase" : "decrease"}
                </span>
              </div>
            </div>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
