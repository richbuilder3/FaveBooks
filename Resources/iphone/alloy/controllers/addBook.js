function Controller() {
    function addBook() {
        var book = Alloy.createModel("books", {
            title: $.titleInput.value,
            author: $.authorInput.value
        });
        myBooks.add(book);
        book.save();
        $.addbook.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addBook";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addBook = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "addBook"
    });
    $.__views.addBook && $.addTopLevelView($.__views.addBook);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.__alloyId0 && $.addTopLevelView($.__views.__alloyId0);
    $.__views.titleInput = Ti.UI.createTextField({
        id: "titleInput",
        hintText: "Title..."
    });
    $.__views.__alloyId0.add($.__views.titleInput);
    $.__views.authorInput = Ti.UI.createTextField({
        id: "authorInput",
        hintText: "Author..."
    });
    $.__views.__alloyId0.add($.__views.authorInput);
    $.__views.insertBookButton = Ti.UI.createButton({
        title: "Add",
        id: "insertBookButton"
    });
    $.__views.__alloyId0.add($.__views.insertBookButton);
    addBook ? $.__views.insertBookButton.addEventListener("click", addBook) : __defers["$.__views.insertBookButton!click!addBook"] = true;
    $.__views.__alloyId1 = Ti.UI.createWindow({
        id: "__alloyId1"
    });
    $.__views.__alloyId1 && $.addTopLevelView($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    __defers["$.__views.insertBookButton!click!addBook"] && $.__views.insertBookButton.addEventListener("click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;