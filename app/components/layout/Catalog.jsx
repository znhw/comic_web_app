import Link from "next/link";
import Card from "../ui/Card/Card"
import styles from '../ui/Card/card.module.css';
import { AppLink } from "../ui/AppLink/AppLink";

const comics = [
    {
        "id": "1",
        "title": "On The Way To Meet Mom",
        "image": "/images/on-the-way-to-meet-mom.webp",
    },
    {
        "id": "2",
        "title": "Little Mushroom",
        "image": "/images/little-mushroom.webp"
    },
    {
        "id": "3",
        "title": "Our Sunny Days",
        "image": "/images/our-sunny-days.webp"
    },
    {
        "id": "4",
        "title": "Dropped Into A Ghost Story, Still Gotta Work",
        "image": "/images/got-dropped-into-a-ghost-story-still-gotta-work.webp"
    },
    {
        "id": "5",
        "title": "Debut or Die!",
        "image": "/images/debut-or-die.webp"
    }, 
    {
        "id": "6",
        "title": "The Hunter's Gonna Lay Low",
        "image": "/images/the-hunters-gonna-lay-low.webp"
    },
    {
        "id": "7",
        "title": "The Guy She Was Interested In Wasn't A Guy At All",
        "image": "/images/the-guy-she-was-interested-in-wasnt-a-guy-at-all.webp"
    },
    {
        "id": "8",
        "title": "Omniscient Reader's Viewpoint",
        "image": "/images/omniscient-readers-viewpoint.webp"
    },
    {
        "id": "9",
        "title": "Fragrant Flower Blooms With Dignity",
        "image": "/images/the-fragrant-flower-blooms-with-dignity.webp"
    },
    {
        "id": "10",
        "title": "Phantom Whispers",
        "image": "/images/phantom-whispers.webp"
    },
    {
        "id": "11",
        "title": "The Knight Only Lives Today",
        "image": "/images/the-knight-only-lives-today.webp"
    },
    {
        "id": "12",
        "title": "Mission: Save The Hunter",
        "image": "/images/mission-save-the-hunter.webp"
    }
]

export default function Catalog() {
    return (
        <div className={styles.cardGrid}>
                {comics.map(({ id, title, image }) => (
                <AppLink href="/comic/omniscient-readers-viewpoint/chapter-1" >

                    <Card key={id} title={title} image={image} />
                </AppLink>
                ))}
        </div>
    );
}