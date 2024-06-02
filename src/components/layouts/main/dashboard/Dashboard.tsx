import React, { useState, useEffect } from "react";
import "./dashboard.css";
import axios from "axios";
import { useQuery } from "react-query";
import Card from "../../../card/Card";

import "./dashboard.css";
import Report from "../../../report/Report";
import RecentSale from "../../../recentSale/RecentSale";
import TopSelling from "../../../topselling/TopSelling";
import RecentActivity from "../../../recentActivity/RecentActivity";

export type CardType = {
  _id: number;
  name: string;
  icon: string;
  amount: number;
  percentage: number;
  active: boolean;
};

const Dashboard = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const {} = useQuery;
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/cards");
      const { data, status } = response;
      setCards(data);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards &&
              cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card} />)}
            <div className="col-12 mt-4">
              <Report />
            </div>
            <div className="col-12 mt-4">
              <RecentSale />
            </div>
            <div className="col-12 mt-4">
              <TopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
