  import { call, put, takeLatest } from 'redux-saga/effects';
  import * as actions from '../actions'
  import {Video} from '../../types'

  export function* watchSearchTextChanged() {
      yield takeLatest(
          actions.searchChanged,
          getAllVideos
      )
  }

  function* getAllVideos(action : actions.videoActions) {
        const payload = yield call(fetchVideos,action.payload as string)
        console.log(payload)
        const videos = mapItems(payload)
        yield put(actions.videoFetchSuccess(videos))
  }

  const fetchVideos = (term : string) : any => {
    const search_url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDDopK4Qc0n44AGsLbF6vQBPfD5oAka358&part=snippet&order=relevance&maxResults=10&q="
    const url = search_url + term
    return fetch(url).then(response => response.json())
  }

  const mapItems = (response : any) => {
    const videos : Video[] = []
    response.items.forEach((element: any)  => {
      const currentItem : Video = {iframe : element.id.videoId, id : element.etag, description : element.snippet.description , image : element.snippet.thumbnails.default.url  }
      videos.push(currentItem)
    });
    return videos;
  }