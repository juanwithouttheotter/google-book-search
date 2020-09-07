import React, {Component} from 'react';
import SearchBar from "../../components/SearchBar";
import API from "../../API/booksAPI"

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
    handleFormSearch = async (event) => {
        event.preventDefault();
        console.log(this.state.inputValue);
        const books = await API.searchGoogleBooks(this.state.inputValue);
        console.log(books);
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
                <div className="results-container">
                </div>
            </div>
        );
    }
}

export default Search;