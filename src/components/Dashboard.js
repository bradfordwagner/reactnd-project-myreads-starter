import React from 'react'
import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom";

class Dashboard extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.bookshelves.map(bookshelf => (
                            <Bookshelf bookshelves={this.props.bookshelves} bookshelf={bookshelf} key={bookshelf.key}/>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'/>
                </div>
            </div>
        )
    }
}

export default Dashboard