import { AccountIcon, SearchIcon, FolderIcon } from "../ui/Icon/Index";
import { Icon } from "../ui/Icon/Icon";
import styles from "./nav.module.css";  
import { AppLink } from "../ui/AppLink/AppLink";

export default function TopNav() {
  return (
   <div className={styles.topNavContainer}>
    <div>Animeness</div>
    <AppLink href="/login" >
        Log in
    </AppLink>
    <div>
        <Icon size="lg" color="#111111" className="topIcons">
            <SearchIcon />
        </Icon>
        <Icon size="lg" color="#161616" className="topIcons">
            <FolderIcon />
        </Icon>
        <Icon size="lg" color="#111111" className="topIcons">
            <AccountIcon />
        </Icon>
    </div>
   </div>
  );
}