"use client";

import React from "react";
import { seed } from "@/utils/seeding";

const About = () => {
  // seed()
  return (
    <button className="hover:cursor-pointer" onClick={seed}>
      Seed Database
    </button>
  );
};

export default About;
