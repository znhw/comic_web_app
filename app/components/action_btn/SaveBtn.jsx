'use client';
import { useState, useEffect } from 'react'; 
import { useParams } from 'next/navigation';
import { Icon } from '../../components/ui/Icon/Icon';
import { SaveIcon } from '../../components/ui/Icon/Index';
import { Button } from '../../components/ui/Button/Button';
import { AppLink } from '../../components/ui/AppLink/AppLink'; 

export const SaveBtn = ({ onClick }) => {
    const [saved, setSaved] = useState(false);
    const params = useParams();

     useEffect(() => {
            const storedLike = localStorage.getItem(params.slug) 
            if (storedLike === 'true')
            setSaved(true);
        }, [params]);
    
        useEffect(() => {
            localStorage.setItem(params.slug, saved);
        }, [params.slug, saved]);
    

    return (
        <AppLink 
            href="#save"
            onClick={(e) => {
                e.preventDefault();
                setSaved(prev => !prev);
                console.log('Save button clicked! New state:', !saved);
            }}
        >
            <Button variant="secondary" size="md">
                <Icon size="lg" color="#111111">
                    <SaveIcon />
                </Icon>
                <span>{saved ? 'Saved' : 'Save'}</span>
            </Button>
        </AppLink>

    );
}