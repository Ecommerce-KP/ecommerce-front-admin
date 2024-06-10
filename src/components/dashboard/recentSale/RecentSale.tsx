import React, { useEffect, useState } from "react";
import "./recentSale.css";
import CardFilter from "../card/CardFilter";
import axios from "axios";
import RecentSaleTable from "./RecentSaleTable";

export type RecentSale = {
  _id: number;
  number: string;
  customer: string;
  product: string;
  price: number;
  status: string;
  id: string;
};

const RecentSale = () => {
  const [items, setItems] = useState<RecentSale[]>([]);
  const [filter, setFilter] = useState<string>("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/recentsales");
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
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>
        <RecentSaleTable items={items} />
      </div>
    </div>
  );
};

export default RecentSale;
