import { useRef } from 'react'
import PropTypes from 'prop-types'
import Header from './header'

const Post = ({content}) => {
    return (
      <div>
        <Header username = {content.username}/>
      </div>
    );
}


Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.bool.isRequired,
        userLikedPhoto: PropTypes.string.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired
    })
}
export default Post