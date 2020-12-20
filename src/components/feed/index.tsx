import { Container } from './styles'
import PostCard from '../cards/post'
import { FC } from 'react'

type Post = {
  posts: Array<{
    id: number
    description: string
    tags: Array<{ title: string }>
    songName: string
    videoUrl: string
    likes: number
    comments: number
    replies: number
    author: {
      id: number
      avatar: string
      name: string
      username: string
    }
  }>
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
