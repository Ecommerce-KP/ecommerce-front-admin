import React from "react";
import { TopSellingType } from "./TopSelling";
import img from "../../assets/imgs/product-1.jpg";

type TopSellingItemType = {
  item: TopSellingType;
};

const TopSellingItem = ({ item }: TopSellingItemType) => {
  return (
    <tr>
      <th scope="row">
        <a href="#">
          <img src={img} alt="" />
        </a>
      </th>
      <td>
        <a href="#" className="text-primary fw-bold">
          {item.name}
        </a>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td className="fw-bold">{item.sold}</td>
      <td>${(item.price * item.sold).toLocaleString("en-US")}</td>
    </tr>
  );
};

export default TopSellingItem;
