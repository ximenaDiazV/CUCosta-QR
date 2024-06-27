import React from "react";
import SeccionDeslizante from "./SeccionDeslizante";

const Principal = () => {
  const sections = [
    {
      bgColor: "#83C5BE",
      imageSrc: "/plant1.jpg",
      title: "Sección 1",
      iconColor: "#F7567C",
    },
    {
      bgColor: "#90C2E7",
      imageSrc: "/plant2.jpg",
      title: "Sección 2",
      iconColor: "#F7567C",
    },
    {
      bgColor: "#9B59B6",
      imageSrc: "/plant3.jpg",
      title: "Sección 3",
      iconColor: "#F7567C",
    },
  ];

  return (
    <>
      <h1>Estamos en construcción, ahí dispense UWU </h1>
      <SeccionDeslizante sections={sections} />
    </>
  );
};

export default Principal;
