# 09 - Dev Tools Domination

## 主題
介紹 `dev tool`，了解 `javascript` 裡 `console` 的實用功能。

## 實作重點

## JS

1. 常用的`console.log` ： 裡面還可以用 ％ + 英文字母 來呈現，不用現在用 [ES6 樣板字面值](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals) ，就很方便了
    - %s：字串
    - %f：浮點數
    - %o：物件
    - %d：整數
    - %c：css 樣式，( ’%c想打的東西’ , ‘css打這裡’)
        
        ```jsx
        // Facebook
        console.log("%c住手", "color: red; font-size: 40px;");
        ```
        
2. 不同的提示
    - ⚠️ warning 警告
    - ❌ error 錯誤
    - ℹ️ info 重要
3. 測試用
    - `assert(條件,訊息)` ：條件為 `false` 時，後面的訊息會跑出來
4. 清除 
    - `clear()`
    - window`console` 的快捷鍵 : control+L 、CTRL+L
5. 展開所有屬性跟功能
    - `dir`：可以看到全部的方法
6. 資料整理
    - `table`：表格化，僅陣列、物件操作
    - `group`：群組化，可以摺疊
    - `groupCollapsed` `groupEnd`：群組化，可以摺疊
7. 計算
    - `count` ：算東西跑幾次
    - `time` , `timeEnd`：算時間起迄

 

### 額外知識

- Alex 大大會把 `console` 封裝起來，當在開發時就打開 `isDev`