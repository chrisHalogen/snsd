import React from "react";
import "./latestOffenders.scss";

const LatestOffenders = () => {
  const offenders = [
    {
      id: 1,
      img: "./offender.jpg",
      username: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "3.668",
    },
    {
      id: 2,
      img: "./offender.jpg",
      username: "Linnie Nelson",
      email: "linnie@gmail.com",
      amount: "3.256",
    },
    {
      id: 3,
      img: "./offender.jpg",
      username: "Brent Reeves",
      email: "brent@gmail.com",
      amount: "2.998",
    },
    {
      id: 4,
      img: "./offender.jpg",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "2.512",
    },
    {
      id: 5,
      img: "./offender.jpg",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 6,
      img: "./offender.jpg",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 7,
      img: "./offender.jpg",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
    {
      id: 8,
      img: "./offender.jpg",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 9,
      img: "./offender.jpg",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 10,
      img: "./offender.jpg",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
  ];
  return (
    <div className="latest-offenders">
      <h1 className="big-head">Latest Offenders</h1>
      <div className="list">
        {offenders.map((user) => (
          <div className="list-item" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestOffenders;
