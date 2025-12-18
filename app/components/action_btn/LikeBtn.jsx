'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Icon } from '../../components/ui/Icon/Icon';
import { LikeIcon } from '../../components/ui/Icon/Index';
import { Button } from '../../components/ui/Button/Button';
import { AppLink } from '../../components/ui/AppLink/AppLink'; 

export const LikeBtn = ({ onClick }) => {
    const params = useParams();
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const storedLike = localStorage.getItem(params.slug) 
        if (storedLike === 'true')
        setLiked(true);
    }, [params]);

    useEffect(() => {
        localStorage.setItem(params.slug, liked);
    }, [params.slug, liked]);

    return (
        <AppLink 
            href="#like"
            onClick={(e) => {
                e.preventDefault();
                setLiked(prev => !prev);    
                console.log('Like button clicked! New state:', !liked);
            }}
        >
            <Button variant="secondary" size="md">
                <Icon size="lg" color="#111111">
                    <LikeIcon />
                </Icon>
                <span>{liked ? 'Liked' : 'Like'}</span>
            </Button>
        </AppLink>

    );
}