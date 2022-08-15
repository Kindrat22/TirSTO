import React, {useState} from "react";
import CarouselBox from "./components/UI/CarouselBox/CarouselBox";
import Info from "./pages/info/info";
import Services from "./pages/services/services";
import Contacts from "./pages/contacts/contacts";
import Header1 from "./components/Header1";
import BasicSpeedDial from "./components/UI/SpeedDial/SpeedDial";






function App() {

  return (

      <div>
          <BasicSpeedDial/>
          <Header1/>
          <CarouselBox/>
          <Info/>
          <Services/>
          <Contacts/>
      </div>


  );
};
export default App;
