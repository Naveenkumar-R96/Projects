import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { NewsProvider } from "./components/Context/Context";
import NewsFeed from "./components/NewsFeed/NewsFeed";
const App = () => {
  return (
    <NewsProvider>
      <div>
        <Navbar/>
        <NewsFeed/>
      </div>
    </NewsProvider>
  );
};

export default App;
