import React from "react";
import Header from "./components/Header";
import CarouselBox from "./components/UI/CarouselBox/CarouselBox";
import Info from "./pages/info/info";
import Socials from "./components/UI/SpeedDial/SpeedDial";
import Posts from "./pages/Posts";
import Footer from "./components/UI/Footer/Footer";



function App() {

  return (

      <div>
        <Header/>
          <CarouselBox/>
          <Info/>
          <Posts/>
          <Socials></Socials>
          <Footer/>

      </div>


  );
};
export default App;
