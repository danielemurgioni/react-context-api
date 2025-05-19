
const PostsCard = ({ item }) => {
    return (
        <>
            <div className="container card mb-20">
                <h2>{item.title} - {item.category} </h2>
                <p>{item.content}</p>
            </div>
        </>
    )
}

export default PostsCard