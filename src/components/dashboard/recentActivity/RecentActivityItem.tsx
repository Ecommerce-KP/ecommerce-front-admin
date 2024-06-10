import React from "react";
import { RecentActivityType } from "./RecentActivity";

type RecentActivityItemProps = {
  item: RecentActivityType;
};

const RecentActivityItem = ({ item }: RecentActivityItemProps) => {
  return (
    <div className="activity-item d-flex">
      <div className="activite-label">{item.time}</div>
      <i
        className={`bi bi-circle-fill activity-badge ${item.color} align-items-center`}
      ></i>
      {item.highlight === "" ? (
        <div className="activity-content">{item.content}</div>
      ) : (
        <div className="activity-content">
          {item?.content?.substring(0, item.content.indexOf(item.highlight))}
          <a href="#" className="fw-bold text-dark">
            {item.highlight}
          </a>
          {item?.content?.slice(
            item?.content?.indexOf(item.highlight) + item.highlight.length,
            -1
          )}
        </div>
      )}
    </div>
  );
};

export default RecentActivityItem;