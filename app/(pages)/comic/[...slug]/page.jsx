'use client';
import TopNav from '../../../components/navigation/TopNav';
import { LikeBtn } from '../../../components/action_btn/LikeBtn';
import { SaveBtn } from '../../../components/action_btn/SaveBtn';

export default function TitlePage({}) {
  return (
    <div>
        <TopNav />
        <h1>Comic Page</h1>
        <p>This is a placeholder for the comic page content.</p>
        <LikeBtn />
        <SaveBtn /> 
      
    </div>
  );
}