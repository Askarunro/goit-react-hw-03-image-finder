import "./App.css";
// import { nanoid } from "nanoid";
import React, { Component } from "react";
import SearchBar from "./components/Searchbar";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import axios from "axios";

axios.defaults.baseURL =
  " https://pixabay.com/api/?key=24828507-89537ba0cc73f2aa36f96abcf&image_type=photo&orientation=horizontal";

class App extends Component {
  state = {
    searchName: "",
    hits: null,
    status: "idle",
    showModal:false,
    imgLarge:"",
    page:1,
  };

  onSubmit = (data) => {
    this.setState({ searchName: data });
  };

  async componentDidUpdate(prevProps, prevState) {

    if (prevState.searchName !== this.state.searchName) {
      try {
        this.state.status = "pending";
        this.state.page = 1;
        const search = this.state.searchName;
        const page = this.state.page
        this.setState({loading:true})
        const response = await axios.get(
          `/search?query=react&page=${page}&per_page=12&q=${search}`
        );
        this.setState({loading:false})
        
        this.setState({hits: response.data.hits});
        this.setState(response.data.total?{status:'resolved'}:{status:'error'})
      } catch {
        this.state.status = "error";
       
      }
    }
    if (prevState.searchName === this.state.searchName && prevState.page!==this.state.page) {
      try {
        this.state.status = "pending";
        const search = this.state.searchName;
        const page = this.state.page
        const response = await axios.get(
          `/search?query=react&page=${page}&per_page=12&q=${search}`
        );
      
        this.setState((prevState)=>({hits:[...prevState.hits, ...response.data.hits], status: 'resolved' }));
      } catch {
        if(this.state.hits<=1){
          this.state.status = "error";
        } 
      }
    }

  }

  toggleModal = ()=>{
    this.setState(({showModal})=>({
      showModal:!showModal,
    }))
  }

  handleImgClick=(data)=>{
    this.setState({ imgLarge: data });
  }

handleMoreClick=()=>{
  this.setState((prevState) => {
    return {page: prevState.page + 1}
  });
}

  render() {
    const { hits, status, showModal,imgLarge} = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        {status === "pending" &&  <Loader />}
        {status === "error" && <h2>Sorry, but there is no such result. Please specify another request.</h2>}
        {status === "resolved" && (
          <>
            <ImageGallery hits={hits} openModal={this.handleImgClick} onClick={this.toggleModal}/>
            <Button onClick={this.handleMoreClick}/>
          </>
        )}
        {showModal && <Modal onClose={this.toggleModal}>
          <img src={imgLarge}/>
          </Modal>}
      </>
    );
  }
}

export default App;
