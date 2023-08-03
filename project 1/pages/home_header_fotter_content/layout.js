import React from "react";
import Fotter from "./fotter";
import Header from "./header";


const MainLayout = ({children},props) => {
  return(
    <>
       <title>{props="props.page"}</title>
       <Header/>
       {children}
       <Fotter/>
      </>
  );
}

export default MainLayout