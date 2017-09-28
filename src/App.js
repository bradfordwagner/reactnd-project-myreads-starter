import React from 'react'
import './App.css'
import {buildDefaultLists, defaultLists, defaultShelves} from "./definitions/BookshelfType"
import Dashboard from "./components/Dashboard";
import * as BooksAPI from './BooksAPI'
import {Route} from "react-router-dom";
import Search from "./components/Search";

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
                    mappedShelves[bookshelf.key] = bookshelf
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
                <Route exact path='/' render={() => (
                    <Dashboard bookshelves={this.state.bookshelves}/>
                )}/>
                <Route path='/search' render={({history}) => (
                    <Search/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
