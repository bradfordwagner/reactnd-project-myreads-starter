import React from 'react'

class Book extends React.Component {
    moveBook(event) {
        this.props.moveBookToList(this.props.book, event.target.value)
    }

    buildAuthorNames = (book) => {
        if (book && book.authors) {
            return book.authors.join(", ")
        } else {
            return "unknown"
        }
    }

    getDefaultOptionValue = () => {
        const book = this.props.book

        if (book && book.shelf) {
            return book.shelf
        } else {
            /*
                check to see if it is in a shelf as a fallback
                search results do not have the attribute shelf on it
                so we need to enrich the book if it DNE
             */
            const result = this.getBookFromShelf(book.id)
            if (result) {
                return result.shelf
            }

            return 'none'
        }
    }

    getBookFromShelf = (bookId) => {
        const result = this.props.bookshelves.reduce((accumulator, currentShelf) => {
            const result = accumulator ? accumulator : currentShelf.myMappedBooks[bookId]
            return result
        }, undefined)
        return result
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{backgroundImage: 'url("' + this.props.book.imageLinks.thumbnail + '")'}}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.moveBook.bind(this)} defaultValue={this.getDefaultOptionValue()}>
                                <option value="none" disabled>Move to...</option>
                                {this.props.bookshelves.map(bookshelf => (
                                    <option key={bookshelf.key} value={bookshelf.key}>{bookshelf.displayText}</option>
                                ))}
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.buildAuthorNames(this.props.book)}</div>
                </div>
            </li>
        )
    }
}

export default Book