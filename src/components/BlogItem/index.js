// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = blogData

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="items-container">
        <div className="main-container">
          <img src={imageUrl} className="img" alt={`item${id}`} />
          <div className="content">
            <p>{topic}</p>
            <p>{title}</p>
            <div className="image-container">
              <img src={avatarUrl} className="avatar-img" alt={`avatar${id}`} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
