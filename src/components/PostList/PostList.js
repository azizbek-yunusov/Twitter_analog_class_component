import PostListItem from "../PostListItem/PostListItem"
import './postList.css'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  const elements = posts.map((item) => {
    const {id, ...iteamProps} = item
    return(
      <div key={item.id} className="list-item box">
        <PostListItem 
          {...iteamProps} 
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
            />
      </div>
    )
  });
  return(
    <div className="list-group">
      {elements}
    </div>
  )
}

export default PostList