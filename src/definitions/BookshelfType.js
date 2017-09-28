
class BookshelfType {
    constructor(uniqueName, displayText) {
        this.key = uniqueName
        this.displayText = displayText
        this.clear()
    }

    clear() {
        this.books = []
    }

    push(book) {
        this.books.push(book)
    }
}

const defaultShelves = [
    new BookshelfType("currentlyReading", "Currently Reading"),
    new BookshelfType("wantToRead", "Want to Read"),
    new BookshelfType("read", "Read")
]


export {
    defaultShelves
}
