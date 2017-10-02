import React from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from "./Book";
import {Link} from "react-router-dom";

class Search extends React.Component {
    state = {
        query: '',
        maxResults: 20,
        books: []
    }

    handleChange = (event) => {
        const query = event.target.value
        this.setState({query})
        this.search(query)
    }

    search = (query) => {
        BooksAPI.search(query, this.state.maxResults).then(books => {
            if (books && !books.error) {
                this.setState({books})
            }
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'/>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book => (
                            <Book key={book.id} book={book} bookshelves={this.props.bookshelves}
                                  moveBookToList={(book, listAction) => this.props.moveBookToList(book, listAction)}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search