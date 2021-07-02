class Book {
    constructor (
        // define parameters
        title,
        author,
        ISBN,
        pubYear,
        pageNumber,
        currentPage,
        readStatus
    ) {
        // define properties
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.pubYear = pubYear;
        this.pageNumber = pageNumber;
        this.currentPage = currentPage;
        this.readStatus = readStatus;
    }
    updateCurrentPage(newCurrentPage) {
        this.currentPage = newCurrentPage;
    }
    updateReadStatus(newReadStatus) {
        this.readStatus = newReadStatus;
    }
}

export default Book;