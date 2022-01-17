import { useRef } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Image from './image'

const Post = ({content}) => {
    return (
      <div className = 'rounded col-span-4 border bg-white border-gray-primary mb-16'>
        <Header username = {content.username}/>
        <Image src = {content.imageSrc} caption = {content.caption}/>
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