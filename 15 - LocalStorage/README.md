# 15 - LocalStorage

## 主題
實作一個 **LocalStorage** 的紀錄菜單功能

## 實作重點

## JS

1. 先了解 **LocalStorage： [MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)**
localStorage 存入 `localStorage.setItem('key', value)` 、
localStorage 取出 `localStorage.getItem('key')`
    - 在視窗中打 **LocalStorage** 可以看到你有儲存的資料
    - 也可以在視窗中找到 Application → Storage → Local Storage → 會看到 key 和 value
2. 先製作點擊新增按鈕的事件 
    1. 點擊新增按鈕觸發 `function: addItem`
    2. 因為是用 `from` 表單傳送會預設傳出去，阻止預設行為加上 `perventDefault`
3. 輸入框的值加到陣列變數中 (`function`: **addItem)**
    1. 取得輸入框的值
        
        ```jsx
        const text = (this.querySelector('[name=item]')).value;
        ```
        
    2. 做一個物件
        
        ```jsx
        const item = {
          text, // es6 縮寫
          done: false
        };
        ```
        
    3. 用陣列方法 `push` 推到變數裡
        
        ```jsx
        items.push(item);
        ```
        
    4. 把 input 裡的文字刪除 
        
        ```jsx
        this.reset(); // 此時的 this 是點擊到的 from
        ```
        
4. 把輸入框打完的字呈現到畫面上
    1. 創一個 `func` **createList** 去處理它，使用 `innerHTML` , `map` , `join` 方法。
    2. 點擊按鈕後即跑這個 `func` 
    3. 在呈現的文字前加入 `checkbox` ，使用 `data-set` , `id` , `三元運算子` ，確認綁定 `id` 和 `for` 兩者一致，之後用 `data-set` 找到值。
5. 把資料儲存在 **LocalStorage** 這樣重新進入才會保留資料 (`function`: **addItem)**
    1. 使用 `setItem(key, value)` 
        
        ```jsx
        localStorage.setItem('items', items);
        ```
        
    2. **LocalStorage** 會看不懂物件所以要幫它轉
        
        ```jsx
        localStorage.setItem('items', JSON.stringify(items));
        ```
        
    3. 可以在視窗中查看 `localStorage.getItem('items')`
6. 從資料庫取出
    1. 使用 `getItem` 取出，要變成原本的物件使用`JSON.paese` ，再賦予值給`items` 變數，如果沒有值就放空陣列 
        
        ```jsx
        const items = JSON.parse(localStorage.getItem('items')) || [];
        ```
        
    2. 更新畫面
        
        ```jsx
        populateList(items, itemsList);
        ```
        
7. 移除已完成事件
    1. 在選單中監聽 `click` 事件，如果有的話就觸發 `func`: **toggleDone**
    2. `func`: **toggleDone** 裡使用 `matches` 找到 `input` 
    3. `input`  裡使用 `data-set` 找到 `index`
    4. `index` 裡使用 `boolean` `.done` 改變原本的狀態
    5. 更新 localStorage
    6. 更新畫面