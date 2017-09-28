import React from 'react'

class Book extends React.Component {
    moveBook(event) {
        this.props.moveBookToList(this.props.book, event.target.value)
    }

    buildAuthorNames = (book) => {
        if (book && book.authors) {
            return book.authors.join(",")
        } else {
            return "unknown"
        }
    }

    getDefaultOptionValue = () => {
        const book = this.props.book
        if(book && book.shelf) {
            return book.shelf
        } else {
            return 'none'
        }
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.props.book.imageLinks.thumbnail + '")' }}></div>
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