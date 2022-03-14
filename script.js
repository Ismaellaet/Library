const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const categories = booksByCategory.length;

for(let category of booksByCategory){
    console.log('Total number of books in each category is:', category.books.length);        
}

function countAuthors(){
    let authors = [];
    for(let categories of booksByCategory){
        for(let book of categories.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author);
            }
        }
    }
    console.log('Total of authors is:', authors.length);
}

function booksOfAuthor(author){
    let books = [];

    for(let categories of booksByCategory){
        for(let book of categories.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`The author's book(s) ${author} are: ${books.join(', ')}` );

}
countAuthors();
booksOfAuthor('George S. Clason')