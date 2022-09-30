import type { NextPage } from 'next';
import logo from '../public/logo.svg';
import Image from "next/image";
const Home: NextPage = () => {
  return (
    <div className="Home">
    <Image src={logo} alt="logo" />
    </div>
  )
}

export default Home;
