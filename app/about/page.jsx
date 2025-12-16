import Image from "next/image"; 
import { SearchIcon, FolderIcon, AccountIcon, SortIcon } from "../components/ui/Icon/Index";
import { Icon } from "../components/ui/Icon/Icon";

export default function About() {
  return (
   <>
    <Icon size="lg" color="#ff0000">
      <SearchIcon className="text-red-500" />
    </Icon>
    this is about page

   </>
  );
}