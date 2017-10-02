import React from 'react'
import './App.css'
import {defaultShelves} from "./definitions/BookshelfType"
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

    moveBookToList(book, newBookshelf) {
        this.setState(state => {
            const bookshelves = state.bookshelves
            const mappedShelves = {}
            bookshelves.forEach(bookshelf => mappedShelves[bookshelf.key] = bookshelf)

            const originalShelf = mappedShelves[book.shelf]
            if(originalShelf) {
                originalShelf.books = originalShelf.books.filter(currentBook => book.id !== currentBook.id)
                delete originalShelf.myMappedBooks[book.id]
            }

            if (mappedShelves[newBookshelf]) {
                mappedShelves[newBookshelf].push(book)
            }
            book.shelf = newBookshelf

            return {
                bookshelves
            }
        })

        BooksAPI.update(book, newBookshelf)
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Dashboard bookshelves={this.state.bookshelves} moveBookToList={(book, listAction) => this.moveBookToList(book, listAction)}/>
                )}/>
                <Route path='/search' render={({history}) => (
                    <Search bookshelves={this.state.bookshelves} moveBookToList={(book, listAction) => this.moveBookToList(book, listAction)} />
                )}/>
            </div>
        )
    }
}

export default BooksApp
