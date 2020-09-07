const API = {
    async searchGoogleBooks(searchTerms) {
        let res;
        try {
            res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`);
        } catch (err) {
            console.log(err)
        }
        const books = await res.json();
        return books;
    },
    async saveBook(data){
        const res = await fetch("/api/books", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        const books = await res.json();
        return books;
    },
    async getSavedBooks() {
        const res = await fetch("/api/books");
        const books = await res.json();
        return books;
    },
    async deleteBookById(mongoId){
        const res = await fetch(`/api/books/${mongoId}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"}
        });
        const response = await res.json();
        return response;
    }
}
export default API;