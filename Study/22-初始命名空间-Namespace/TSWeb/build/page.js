"use strict";
/*
 * @Author: gaoyuan
 * @Date: 2020-10-26 15:07:57
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 16:46:07
 */
console.log('jspang.com');
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
