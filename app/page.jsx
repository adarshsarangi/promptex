import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore prompts
      </h1>
      <br className="max-md:hidden"></br>
      <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      <p className="desc text-center">
        Promptex is an open-source AI prompting tool, get started, explore, create and share.
      </p>
      <Feed/>
    </section>
  )
}

export default Home

