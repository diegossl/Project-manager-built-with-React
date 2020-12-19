import Suggestion from '../components/suggestion'
import Layout from '../components/layout'
import Feed from '../components/feed'
import { posts } from '../api/posts'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestion></Suggestion>
    </Layout>
  )
}

export default Home
