import React, { useEffect, useState } from "react";
import "./topSelling.css";
import axios from "axios";
import CardFilter from "../card/CardFilter";
import TopSellingItem from "./TopSellingItem";

export type TopSellingType = {
  _id: number;
  preview: string;
  name: string;
  price: number;
  sold: number;
  id: string;
};

const TopSelling = () => {
  const [items, setItems] = useState<TopSellingType[]>([]);
  const [filter, setFilter] = useState<string>("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/topselling");
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
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>

        <table className="table table-border-less">
          <thead className="table-night">
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Sold</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.length > 0 &&
              items.map((item) => (
                <TopSellingItem key={item._id} item={item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSelling;
