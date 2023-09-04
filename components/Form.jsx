import React from 'react'
import Link from 'next/link'

const Form = ({type, post, setPost, submitting , handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'><span className='blue_gradient'>{type} post</span></h1>
      <p className='desc text-left max-w-md'>{type} and share prompts with others</p>

      <form 
      onSubmit={handleSubmit}
      className='mt-10 wt-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label><span className='font-satoshi font-semibold text-base text-gray-700'>Your AI prompt</span></label>
        <textarea
        value = {post.prompt}
          onChange={(e)=>setPost({ ...post , prompt : e.target.value})}
          placeholder='write your prompt here'
          required
          className='form_textarea'
        >
        </textarea>
      </form>
    </section>
  )
}

export default Form