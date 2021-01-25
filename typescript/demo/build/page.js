"use strict";
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement("div");
            ele.innerHTML = "this is header";
            document.body.appendChild(ele);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement("div");
            ele.innerHTML = "this is Content";
            document.body.appendChild(ele);
        }
        return Content;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header(),
                new Content();
        }
        return Page;
    }());
    new Page();
})(Home || (Home = {}));
