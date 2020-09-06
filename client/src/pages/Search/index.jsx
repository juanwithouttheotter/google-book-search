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
    handleFormSearch = (event) => {
        event.preventDefault();
        console.log(this.state.inputValue);
        // this.setState({inputValue: ''});
    }

    render(){
        return(
            <div>
                <div className="my-4"></div>
                <SearchBar
                    inputValue={this.inputValue}
                    searchOnChange={this.searchOnChange}
                    handleFormSearch={this.handleFormSearch}
                />
                <div className="my-4"></div>
                <div classname="results-container">
                </div>
            </div>
        );
    }
}

export default Search;