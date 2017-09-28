import React from 'react'

class Book extends React.Component {
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.props.book.iconURL + '")' }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                {this.props.bookshelfTypes.map(bookshelfType => (
                                    <option value={bookshelfType.uniqueName}>{bookshelfType.displayText}</option>
                                ))}
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.name}</div>
                    <div className="book-authors">{this.props.book.author}</div>
                </div>
            </li>
        )
    }
}

export default Book