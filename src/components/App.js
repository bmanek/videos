 import React from 'react'
 import SearchBar from './SearchBar'

 class App extends React.Component {
   const API_KEY = process.env.REACT_APP_API_KEY


   render() {
     return (
       <div className="ui container">
        <SearchBar />
       </div>
     )
   }
 }

 export default App
