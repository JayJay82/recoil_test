import React from 'react'
import { Grid } from '@material-ui/core'
import { Searchbar } from '../components/searchbar'
import { VideoList } from '../components/videoList'
import VideoDetail from '../components/videoDetail'



const MaingPage = () => {
    return(
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <Searchbar />
          </Grid>
          <Grid item xs={4}><VideoList /></Grid>
          <Grid item xs={8}><VideoDetail /></Grid>
        </Grid>
        
    )
}

export default MaingPage