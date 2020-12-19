import { Container } from './styles'
import PostCard from '../cards/post'
import { FC } from 'react'

type Post = {
  posts: Array<string>
}

const Feed: FC<Post> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post}></PostCard>
      ))}
    </Container>
  )
}

export default Feed
