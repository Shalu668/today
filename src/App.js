
import React, {Component} from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component
{
  render()
  {
  return(
    <div>
      <Header />
      <Banner />
      <Technologies />
      <OurTeam />
      <Footer />
    </div>
  );
};
};

export default App;