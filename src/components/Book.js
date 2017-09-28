import React from 'react'

class Book extends React.Component {
    log(event) {
        this.props.moveBookToList(this.props.book, event.target.value)
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.props.book.imageLinks.thumbnail + '")' }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.log.bind(this)} defaultValue='none'>
                                <option value="none" disabled>Move to...</option>
                                {this.props.bookshelves.map(bookshelf => (
                                    <option key={bookshelf.key} value={bookshelf.key}>{bookshelf.displayText}</option>
                                ))}
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors.join(", ")}</div>
                </div>
            </li>
        )
    }
}

export default Book