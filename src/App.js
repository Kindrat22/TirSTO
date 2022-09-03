import React from "react";
import Header from "./components/Header";
import Info from "./pages/info/info";
import Socials from "./components/UI/SpeedDial/SpeedDial";
import Footer from "./components/UI/Footer/Footer";
import Contacts from "./pages/contacts/contacts";
import Services from "./pages/services/Services";
import CarouselBox from "./pages/CarouselBox/CarouselBox";
import Maps from "./pages/Map/Map";




function App() {

  return (

      <div>
          <Header/>
          <CarouselBox/>
          <Info/>
          <Contacts/>
          <Services/>

          <Socials></Socials>
          <Footer/>



      </div>


  );
};
export default App;
