import Link from "next/link";
import Layout from "./layout";
import Image from 'next/image'
import React from "react";

const Header = () => {
    return (
      <React.Fragment>
        <center>
        <Link href="#">Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="/about">About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="#">Tour Point&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="#">Place&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="#">Contact</Link>
        </center>
      </React.Fragment>
    );
  }
  export default Header