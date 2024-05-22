import React from "react";
import { competitions } from "../../data/competitions";
import "../../assets/css/styles-home.css";

const CompetitionMenu = () => {
  return (
    <div className="grid grid-cols-3 gap-y-10 mt-12  w-full ">
      {competitions.map((data, key) => {
        return (
          <div className="card mx-auto" key={key}>
            <a href="">
              <img src={data.image} alt="Event 1" />
            </a>
            <div className="">
              <div className="category">{data.level}</div>
              <div className="type">{data.category}</div>
              <h3>{data.name}</h3>
              <div className="details">
                <span>{data.date}</span>
                <span>{data.views} views</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompetitionMenu;
