import { TextField } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {searchChanged} from '../../state/actions'
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
    const dispatch = useDispatch()
    const debounced = useDebouncedCallback(
        (value) => {

          dispatch(searchChanged(value))
        },
        2000
      );
    return(
        <TextField fullWidth  label="Cerca" defaultValue='' onChange={(e) => debounced.callback(e.target.value)} />
    )
}

export default SearchBar