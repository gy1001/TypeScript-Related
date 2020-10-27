/*
 * @Author: gaoyuan
 * @Date: 2020-10-26 17:37:57
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-27 10:05:27
 */

import {Header,Content,Footer} from "./components"

export default class Page{
  constructor(){
    new Header()
    new Content()
    new Footer()
  }
}