"use client"

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Navbar from "@/components/mine/homeNavbar";
import TemplateGallery from "@/components/mine/templateGallery";


const Home = () => {
  const documents = useQuery(api.documents.get);
  if(documents === undefined) {
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar/>
      </div>
      <div className="mt-16">
        <TemplateGallery/>
        {documents?.map((d) => {
          return <span key={d._id}>{d.title}</span>;
        })}
      </div>
    </div>
  );
};

export default Home;
