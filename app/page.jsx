import Image from "next/image";
import { SearchIcon, FolderIcon, AccountIcon, SortIcon } from "./components/ui/Icon/Index";
import { Icon } from "./components/ui/Icon/Icon";
import { AppLink } from "./components/ui/AppLink/AppLink";
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
