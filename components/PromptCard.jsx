'use client'
import React from 'react'
import {useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';


const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  return (
    <div className='prompt_card'>
    <div className='flex justify-between items-start gap-5'>
    <div className='flex justify-start items-center gap-3 cursor-pointer '>
      <Image 
        src={post.creator.image}
        alt='user_image'
        width={40}
        height={40}
        className='rounded-full object-contain'
      />
      <div>
        
      </div>
    </div>

    </div>
    </div>
  )
}

export default PromptCard