//import context
import { useContext } from 'react'
import PostsContext from '../context/PostsContext'

//import PostCard
import PostsCard from './PostsCard'



const PostsList = () => {

    const posts = useContext(PostsContext)
    console.log(posts)

    return (
        <>
            {posts.map((post) => (
                <PostsCard key={post.id} item={post} />
            ))}
        </>
    )
}

export default PostsList