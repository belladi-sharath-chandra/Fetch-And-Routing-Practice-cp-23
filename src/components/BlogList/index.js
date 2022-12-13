// Write your JS code here
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(each => ({
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      content: each.content,
      author: each.author,
      topic: each.topic,
      id: each.id,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <Loader height={50} width={50} color="#00BFFF" type="TailSpin" />
        ) : (
          blogsData.map(each => <BlogItem key={each.id} blogData={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
