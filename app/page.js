import Link from "next/link";
import React from "react";

const HomePage = () => {
  console.log("home page");
  return (
    <div>
      <h1 className="text-5xl mb08 font-bold">Next.js Tutorial</h1>
      <Link href="/client" className="btn btn-accent">GET STARTED</Link>
    </div>
  );
};

export default HomePage;
