import { create } from 'lodash'
import {createAction, ActionType} from 'typesafe-actions'
import {Video} from '../../types'
export const searchChanged = createAction('search/searchChanged')<string>()
export const videoFetchSuccess = createAction('search/videoFetchSuccess')<Video[]>()
export const selectedVideoChanged = createAction('search/selectedVideoChanged')<Video>()
export type videoActions  = ActionType<typeof searchChanged | typeof videoFetchSuccess |typeof selectedVideoChanged>