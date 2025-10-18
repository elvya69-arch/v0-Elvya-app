'use client'

import Navbar from "@/components/LayOut/NavBar";
import "../styles/globals.css"; // or wherever your CSS file with @tailwind is

import DatePlanner  from "@/components/date-planner"

export default function Home() {
  return (<><Navbar/><DatePlanner /></>)
}