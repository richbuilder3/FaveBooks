function Controller() {
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId6 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId4.__transform["title"] ? __alloyId4.__transform["title"] : __alloyId4.get("title"),
                author: "undefined" != typeof __alloyId4.__transform["author"] ? __alloyId4.__transform["author"] : __alloyId4.get("author")
            });
            rows.push(__alloyId6);
            showBook ? __alloyId6.addEventListener("click", showBook) : __defers["__alloyId6!click!showBook"] = true;
        }
        $.__views.bookTable.setData(rows);
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author
        };
        var bookview = Alloy.createController("bookdetails", args).getView();
        bookview.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("books");
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "My Books",
        id: "__alloyId3"
    });
    $.__views.bookTable = Ti.UI.createTableView({
        id: "bookTable"
    });
    $.__views.__alloyId3.add($.__views.bookTable);
    var __alloyId7 = Alloy.Collections["books"] || books;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId3,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    var book = Alloy.createModel("books", {
        title: "Great Expectations",
        author: "Charles Dickens"
    });
    var myBooks = Alloy.Collections.books;
    myBooks.add(book);
    book.save();
    $.navGroupWin.open();
    __defers["__alloyId6!click!showBook"] && __alloyId6.addEventListener("click", showBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;