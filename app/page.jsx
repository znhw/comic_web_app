import Image from "next/image"; 
import TopNav from "./components/navigation/TopNav";
import MainNav from "./components/navigation/MainNav";
import GenreNav from "./components/navigation/GenreNav";
import Catalog from "./components/layout/Catalog";

export default function Home() {
  return (
   <>
      <TopNav />
      <MainNav />
      <GenreNav />
      <Catalog />
   </>
  );
}
