import React from 'react'
import './App.css'
import Search from "./components/Search";
import {buildDefaultLists, defaultLists, defaultShelves} from "./definitions/BookshelfType"
import Dashboard from "./components/Dashboard";
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    state = {
        bookshelves: defaultShelves
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState(state => {
                const bookshelves = state.bookshelves
                const mappedShelves = {}
                bookshelves.forEach(bookshelf => {
                    mappedShelves[bookshelf.uniqueName] = bookshelf
                    bookshelf.clear()
                })

                books.forEach(book => mappedShelves[book.shelf].push(book))

                return {
                    bookshelves: bookshelves
                }
            })
        })
    }

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <Search/>
                ) : (
                    <Dashboard bookshelves={this.state.bookshelves}/>
                )}
            </div>
        )
    }
}

export default BooksApp
