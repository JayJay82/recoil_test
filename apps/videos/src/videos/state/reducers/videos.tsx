
import {createReducer} from 'typesafe-actions'
import {Video} from '../../types'
import * as videoActions from '../actions'


export interface State {
    text : string,
    videos : Video[],
    selected : Video | null
}
const initialState : State = {
    text : '',
    videos : [],
    selected : null
}

const videoReducer = createReducer<State,videoActions.videoActions>(initialState)
.handleAction(videoActions.searchChanged,(state,action) => {
    return {...state, text : action.payload}
})
.handleAction(videoActions.videoFetchSuccess,(state,action) => {
    return {...state, videos : action.payload}
})
.handleAction(videoActions.selectedVideoChanged,(state,action) => {
    return {...state, selected : action.payload}
})



export default videoReducer

