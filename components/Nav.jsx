'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const {data:session} = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown , setToggleDropdown] =useState(false);

  //Allow us to sign in using google and next-auth
  useEffect(() =>{
    const setUpProviders = async ()=>{
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }
  ,[]);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image className='object-contain'
        src="/assets/images/logo.svg" 
        alt='promptex logo'
        height={30}
        width={30}
        />
        <p className='logo_text'>Promptex</p>
      </Link>

      <div className='sm:flex hidden'>
        { session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
            </Link>
            <button type= 'button' className='outline_btn' onClick={signOut}>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image src={session?.user.image} height={37} width={37} className='rounded-full'></Image>
            </Link>
          </div>
        ):(
          <>
            {providers && Object.values(providers).map((provider)=>
                (
                  <button 
                  type ='button' 
                  key={provider.name} 
                  className='black_btn' 
                  onClick={()=>signIn(provider.id)}>
                    Sign In
                  </button>
                )
              )
            }
          </>
        )}
      </div>

      {/*Mobile Navigation */ }
      <div className='sm:hidden flex relative'>
        {session?.user  ?(
          <div className='flex'>
            <Image 
            className='object-contain'
            src={session?.user.image}
            alt='promptex logo'
            height={30}
            width={30}
            onClick={()=>setToggleDropdown((prev)=>!prev)}
            />
            {toggleDropdown && 
             (
              <div className='dropdown'>
                <Link href ='/profile'
                className='dropdown_link'
                onClick={()=>setToggleDropdown(false)}
                >
                Profile
                </Link>
                <Link href ='/create-prompt'
                className='dropdown_link'
                onClick={()=>setToggleDropdown(false)}
                >
                Create-prompt
                </Link>
                <button
                onClick={()=>{setToggleDropdown(false);signOut();}}
                className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
             )
            }
          </div>
        ):(
          <>
            {providers && Object.values(providers).map((provider)=>
                (
                  <button 
                  type ='button' 
                  key={provider.name} 
                  className='black_btn' 
                  onClick={()=>signIn(provider.id)}>
                    Sign In
                  </button>
                )
              )
            }
          </>
          
        )}

      </div>
    </nav>
  )
}

export default Nav