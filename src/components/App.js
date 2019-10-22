 import React from 'react'
 import SearchBar from './SearchBar'

 const API_KEY = process.env.REACT_APP_API_KEY

 class App extends React.Component {


   render() {
     return (
       <div className="ui container">
        <SearchBar />
       </div>
     )
   }
 }

 export default App
