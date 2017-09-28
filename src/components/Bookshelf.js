import React from 'react'
import Book from "./Book";
import BookInfo from "../definitions/BookInfo"

class Bookshelf extends React.Component {
    state = {
        testBook: new BookInfo("my favorite book", "Bradford Wagner", "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelf.displayText}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.bookshelf.books.map(book => (
                            <Book book={book}></Book>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf