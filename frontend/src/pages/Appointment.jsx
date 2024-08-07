import React from "react";
import Hero from "../components/Hero.jsx";
import AppointmentForm from "../components/AppointmentForm.jsx";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Clinic"}
        imageUrl={"../../public/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
