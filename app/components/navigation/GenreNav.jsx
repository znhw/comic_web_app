'use client';
import { useState } from "react";   
import { Tab } from "../ui/Tab/Tab";

const genres = [    
    {id: 1, name: "All"},
    {id: 2, name: "Adventure"},
    {id: 3, name: "Comedy"},
    {id: 4, name: "Drama"},
    {id: 5, name: "Fantasy"},
    {id: 6, name: "Horror"},
    {id: 7, name: "Slice of Life"},
    {id: 8, name: "Action"},
    {id: 9, name: "Romance"},
    {id: 10, name: "Sci-Fi"},
]

export default function GenreNav() {
    const [activeGenre, setActiveGenre] = useState(genres[0].id);

  return (
   <>
    {genres.map((genre) => (
        <Tab
            key={genre.id}
            label={genre.name}
            isActive={activeGenre === genre.id}
            onClick={() => setActiveGenre(genre.id)}
        >
            {genre.name}
        </Tab>
    ))}
   </>
  );
}