 import React from 'react'
 import SearchBar from './SearchBar'
 import VideoList from './VideoList'
 import youtube from '../apis/youtube'

 const API_KEY = process.env.REACT_APP_API_KEY

 class App extends React.Component {
   state = {
     videos: [],
     selectedVideo: null
   }

   onTermSubmit = async term => {
     const response = await youtube.get('/search', {
       params: {
         q: term
       }
     })

     this.setState({ videos: response.data.items })
   }

   onVideoSelect = video => {
     console.log("From the app!", video)
   }

   render() {
     return (
       <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}
          onVideoSelect={this.onVideoSelect} />
       </div>
     )
   }
 }

 export default App
