import React, { useEffect, useState } from "react";
import CardFilter from "../card/CardFilter";
import axios from "axios";
import RecentActivityItem from "./RecentActivityItem";
import "./recentActivity.css";

export type RecentActivityType = {
  _id: number;
  time: string;
  color: string;
  content: string;
  highlight: string;
};

const RecentActivity = () => {
  const [items, setItems] = useState<RecentActivityType[]>([]);
  const [filter, setFilter] = useState<string>("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/recentactiviy");
      const { data, status } = response;
      setItems(data);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>
        <div className="activity">
          {items &&
            items.length > 0 &&
            items.map((item) => <RecentActivityItem key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
