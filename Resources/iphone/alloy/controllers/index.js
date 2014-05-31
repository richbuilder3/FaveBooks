function Controller() {
    function __alloyId10(e) {
        if (e && e.fromAdapter) return;
        __alloyId10.opts || {};
        var models = __alloyId9.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId8 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId6.__transform["title"] ? __alloyId6.__transform["title"] : __alloyId6.get("title"),
                author: "undefined" != typeof __alloyId6.__transform["author"] ? __alloyId6.__transform["author"] : __alloyId6.get("author")
            });
            rows.push(__alloyId8);
            showBook ? __alloyId8.addEventListener("click", showBook) : __defers["__alloyId8!click!showBook"] = true;
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
        $.navGroupWin.openWindow(bookview);
    }
    function addBook() {
        var myAddBook = Alloy.createController("addbook", {}).getView();
        $.navGroupWin.openWindow(myAddBook);
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
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "My Books",
        id: "__alloyId5"
    });
    $.__views.bookTable = Ti.UI.createTableView({
        id: "bookTable"
    });
    $.__views.__alloyId5.add($.__views.bookTable);
    var __alloyId9 = Alloy.Collections["books"] || books;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    var __alloyId13 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Add book"
    });
    __alloyId13.push($.__views.add);
    addBook ? $.__views.add.addEventListener("click", addBook) : __defers["$.__views.add!click!addBook"] = true;
    $.__views.__alloyId11 = Ti.UI.iOS.createToolbar({
        items: __alloyId13,
        bottom: "0",
        id: "__alloyId11"
    });
    $.__views.__alloyId5.add($.__views.__alloyId11);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId5,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
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
    __defers["__alloyId8!click!showBook"] && __alloyId8.addEventListener("click", showBook);
    __defers["$.__views.add!click!addBook"] && $.__views.add.addEventListener("click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;