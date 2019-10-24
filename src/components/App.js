 import React from 'react'
 import SearchBar from './SearchBar'
 import youtube from '../apis/youtube'

 const API_KEY = process.env.REACT_APP_API_KEY

 class App extends React.Component {

   onTermSubmit = async term => {
     const response = await youtube.get('/search', {
       params: {
         q: term
       }
     })

     console.log(response)
   }

   render() {
     return (
       <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
       </div>
     )
   }
 }

 export default App
