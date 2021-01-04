import { all, fork } from 'redux-saga/effects';
import { watchSearchTextChanged } from '../../videos/state/sagas'

export default function* root() {
    yield all([fork(watchSearchTextChanged)])
}