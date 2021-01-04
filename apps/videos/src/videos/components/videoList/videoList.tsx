import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selectedVideoChanged } from '../../state/actions'
import { getVideos } from '../../state/selectors'
import { Video } from '../../types'
import VideoItem from './videoItem'

const VideoList = () => {
   const videos = useSelector(getVideos)
   const dispatch = useDispatch();
   const selectVideo = (item: Video) => {
       dispatch(selectedVideoChanged(item));
   }
   return(
       <div>
        {videos.map(item => <div key={item.id} onClick={() => selectVideo(item)}><VideoItem image={item.image} description={item.description}  /></div>)}
       </div>
   )
}

export default VideoList