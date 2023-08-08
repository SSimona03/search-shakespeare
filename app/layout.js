"use client";
import "../dist/styles/globals.css";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";

const inter = Inter({ subsets: ["latin"] });

//the layout on how the pages will be arraned

export default function RootLayout({ children }) {
  const [searchResults, setSearchResults] = useState("");

  const handleSearch = (value) => {
    // console.log("search handled:", value);
    setSearchResults(value); // Update search value from Searchbar
  };
  return (
    <html lang="en">
      <body>
        <div>
          <Searchbar onSearch={handleSearch} />
        </div>
        <Results searchResults={searchResults} />
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
