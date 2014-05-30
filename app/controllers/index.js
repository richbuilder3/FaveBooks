// function doClick(e) {
    // alert($.label.text);
// }
// 
// $.index.open();
var book = Alloy.createModel('books',{
	title : 'Great Expectations',
	author: 'Charles Dickens'
});

var myBooks = Alloy.Collections.books;


function showBook(event){
	var selectedBook = event.source;var args = {
		title: selectedBook.title,
		author: selectedBook.author
	};
	var bookview = Alloy.createController("bookdetails", args).getView();
	bookview.open();
}


myBooks.add(book);
book.save();

$.index.open();