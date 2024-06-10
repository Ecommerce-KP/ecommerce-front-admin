import React, { useState } from "react";
import CardFilter from "../card/CardFilter";
import ReportCharts from "../chart/ReportCharts";


const Report = () => {
  const [filter, setFilter] = useState<string>("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Reports <span>/ {filter}</span>
        </h5>
        <ReportCharts />
      </div>
    </div>
  );
};

export default Report;
