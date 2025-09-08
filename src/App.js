import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import Section from "./components/Section";
import SongsSection from "./components/SongsSection";

function App() {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "white" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
{/* 
   

      {/* Albums + Songs Sections */}
      <div style={{ padding: "20px" }}>
        <Section
          title="Top Albums"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
        />
        <Section
          title="New Albums"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
        />
        <SongsSection />
      </div>
    </div>
  );
}

export default App;
