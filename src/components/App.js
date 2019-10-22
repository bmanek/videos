 import React from 'react'
 import SearchBar from './SearchBar'
 import youtube from '../apis/youtube'

 const API_KEY = process.env.REACT_APP_API_KEY

 class App extends React.Component {

   onTermSubmit = (term) => {
     youtube.get('/search', {
       params: {
         q: term
       }
     })
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
