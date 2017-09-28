import React from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from "./Book";

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
        console.log(`searching for ${query}`)
        BooksAPI.search(query, this.state.maxResults).then(books => {
            if (books && !books.error) {
                console.log(`safetly settings books ${books.length}`)
                this.setState({books})
            }
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search by title or author"/>
                        {/*<pre>query: {this.state.query}</pre>*/}
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book => (
                            <Book key={book.id} book={book} bookshelves={this.props.bookshelves} moveBookToList={(book, listAction) => this.props.moveBookToList(book, listAction)}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search