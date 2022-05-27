import React from 'react';
import axios from 'axios';
import SearchInput from './Searchinput';
import ImageList from './imageList';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { images: [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=27398317-ddd2e869a614942b34f21b9a3&q=${entry}&image_type=photo`)
        console.log(response.data);
        this.setState({images: response.data.hits})
    }


    render() {
            return (
        <div className='ui container' style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
            <ImageList images = {this.state.images} />
        </div>
    )
    }

}

export default App;