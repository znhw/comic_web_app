import { AppLink } from "../ui/AppLink/AppLink";
import styles from "./nav.module.css";

export default function MainNav() {
  return (
   <div className={styles.mainNavContainer}>
    <AppLink href="/">Home</AppLink>
    <AppLink href="/completed">Completed</AppLink>
    <AppLink href="/trending">Trending</AppLink>
   </div>
  );
}