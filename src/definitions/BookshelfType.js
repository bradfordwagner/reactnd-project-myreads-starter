
class BookshelfType {
    constructor(uniqueName, displayText) {
        this.uniqueName = uniqueName
        this.displayText = displayText
    }
}

const defaultShelves = [
    new BookshelfType("reading", "Currently Reading"),
    new BookshelfType("wishlist", "Want to Read"),
    new BookshelfType("finished", "Read")
]

// initialize default lists so we have a list per type, which will be a list of books
const defaultLists = {}
defaultShelves.forEach(bookShelfType => defaultLists[bookShelfType.uniqueName] = []);

export {
    BookshelfType,
    defaultShelves,
    defaultLists
}
