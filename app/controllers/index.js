// function doClick(e) {
    // alert($.label.text);
// }
// 
// $.index.open();

var myBooks = Alloy.Collections.books;

var book = Alloy.createModel('books',{
	title : 'Great Expectations',
	author: 'Charles Dickens'
});

myBooks.add(book);
book.save();

$.index.open();