import React, {Component} from 'react';
import SearchBar from "../../components/SearchBar";

class Search extends Component {
    state = {
        inputValue: '',

    }
    searchOnChange = (event) => {
        
        this.setState({
            inputValue: event.target.value
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <div className="my-4"></div>
                <SearchBar
                    inputValue={this.inputValue}
                    searchOnChange={this.searchOnChange}
                />
            </div>
        );
    }
}

export default Search;