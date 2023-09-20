'use client'
import React from 'react'
import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '@components/Profile';

const MyProfile = () => {
    const {data : session} = useSession();
    const [posts, setPosts] = useState([]);
    const handleEdit = ()=>{

    }
    const handleDelete = async ()=>{

    }
    useEffect(()=>{
        const fetchPosts = async ()=>{
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
          setPosts(data);
        }
        if(session?.user.id)fetchPosts();
    },[])
  return (
    <Profile 
        name ="My"
        desc ="Welcome to your Personalized Profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile