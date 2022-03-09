import "./App.css";
import { nanoid } from "nanoid";
import React, { Component } from "react";
import SearchBar from "./components/Searchbar"
import Loader from "./components/Loader"
import ImageGallery from "./components/ImageGallery"
import Button from "./components/Button"
import axios from "axios";

axios.defaults.baseURL = " https://pixabay.com/api/?page=1&key=24828507-89537ba0cc73f2aa36f96abcf&image_type=photo&orientation=horizontal";

class App extends Component {

  state = {
    searchName:"",
    hits:null,
  };

  onSubmit=(data)=>{
    this.setState({searchName:data})
  }

  async componentDidUpdate(prevProps,prevState) {
    if(prevState.searchName !== this.state.searchName){
      const search = this.state.searchName
      const response = await axios.get(`/search?query=react&per_page=12&q=${search}`);
      this.setState({ hits: response.data.hits });
        }
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevProps.name !==this.state.searchName){
  // console.log('gdsgdsgsd')
  //   }
  // }

  

  render() {
    return (
      <>
       <SearchBar 
       onSubmit={this.onSubmit}/>
       {/* <Loader/>
       <Button/> */}
       {this.state.hits && 
       (<ImageGallery hits={this.state.hits}/>)}
      </>
    );
  }
}

export default App;
