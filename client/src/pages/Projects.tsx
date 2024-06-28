import React from "react";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Pojects</h1>
      <p>
        Checkout my github profile for all the projects I have worked on. I have
        worked on a variety of projects from simple scripts to complex applications.
      </p>
      <CallToAction />
    </div>
  );
}
