import React from 'react'
import Book from "./Book";

class Bookshelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelf.displayText}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.bookshelf.books.map(book => (
                            <Book book={book} key={book.id}></Book>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf