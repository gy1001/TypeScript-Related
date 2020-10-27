"use strict";
/*
 * @Author: gaoyuan
 * @Date: 2020-10-26 15:07:57
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 17:01:58
 */
console.log('jspang.com');
//class Header{
//  constructor(){
//    const elem = document.createElement("div")
//    elem.innerText = "This is Header"
//    document.body.appendChild(elem) 
//  }
//}
//class Content{
//  constructor(){
//    const elem = document.createElement("div")
//    elem.innerText = "This is Content"
//    document.body.appendChild(elem) 
//  }
//}
//class Footer{
//  constructor(){
//    const elem = document.createElement("div")
//    elem.innerText = "This is Footer"
//    document.body.appendChild(elem) 
//  }
//}
//class Page{
//  constructor(){
//    new Header()
//    new Content()
//    new Footer()
//  }
//}
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
