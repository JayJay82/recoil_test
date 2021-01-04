import {State} from '../reducers'
import {createSelector} from 'reselect'


const getState = (state : {videos : State}) => state

export const getSearchText = createSelector(getState, res => res.videos.text)
export const getVideos = createSelector(getState, res => res.videos.videos)
export const getSelectedVideos = createSelector(getState, res => res.videos.selected)