import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];
  return (
    <>
      <footer className="container">
        <hr />

        <div className="content">
          <div>
            <img src="../../public/logo.png" alt="logo-img" width={200} />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/appointments">
                <li>Appointments</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>

            <li>
              {hours.map((e) => {
                return (
                  <li key={e.id}>
                    <span>{e.day} </span>
                    <span> --&nbsp;--&nbsp;{e.time}</span>
                  </li>
                );
              })}
            </li>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>cntbabul@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Gwahati, Assam</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
