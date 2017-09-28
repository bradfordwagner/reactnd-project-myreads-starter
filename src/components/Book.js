import React from 'react'

class Book extends React.Component {
    render() {
        debugger
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.props.book.imageLinks.thumbnail + '")' }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
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