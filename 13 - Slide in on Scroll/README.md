# 13 - Slide in on Scroll

## 主題
實作一個當畫面滾動到圖片區域時圖片以動畫方式跑出

## 實作重點

## JS

1. 先了解
 `windowTop` ：畫面最上面 = `window.scrollY` 、
 `windowBottom`：畫面最底部 = `windowTop` + `window.innerHeight`
2. 取得全部圖片：圖片中加上  `.active` 時就會彈出
3. 使用 `window` 事件的 `scroll` 觸發 `function` ，可以 `console` 確認。
4. 計算照片彈入彈出時間點：
    1. 計算圖片的一半位置
        
        ```jsx
        const imgMiddle = sliderImage.offsetTop + sliderImage.height / 2;
        ```
        
    2. 當圖片的一半小於畫面底部 和 圖片的一半大於畫面頂部時 就彈出圖片
        
        ```jsx
        if (imgMiddle < windowBottom && imgMiddle > windowTop) {
          sliderImage.classList.add("active");
        } else {
          sliderImage.classList.remove("active");
        }
        ```
        
5. 加入`debounce` : 加入以後圖片會比較慢彈入(20毫秒不做事就彈入)。
    
    ```jsx
    window.addEventListener('scroll', debounce(scrollHandler));
    ```
    

### 額外知識

**window.scroll**

- `window.scrollTo()` ：移動至，畫面上(x, y)軸的距離。
- `window scroll` 是一個連續觸發的事件，相對比較耗效能。

**debounce 防抖動**

- `debounce` 是針對連續觸發事件，希望過濾它把次數降低，大部分會有幾個參數 `func` ：要觸發的`function` 、 `wait` : 等待多久時間、`immediate` 立即觸發。
- 範例中`debounce` 是一種閉包的寫法：封閉的包裝，內層函式可以取得外層函式作用域內的變數。
- 範例中`debounce` function 裡 `apply`
    - `apply` ：傳參數限定 2 筆，第二筆之後用陣列包起來，可以對應 `argument` 。
    - `call` 有點像`apply`只是傳參數不限定筆數
- debounce 和 throttle 差別 [文章](https://medium.com/@alexian853/debounce-throttle-%E9%82%A3%E4%BA%9B%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC%E6%87%89%E8%A9%B2%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%B0%8F%E4%BA%8B-%E4%B8%80-76a73a8cbc39)
    - debounce 計時器重啟時間
    - throttle 控制計時器執行完前不做任何事，執行完後在執行一次計時器
1. 修改 `debounce` ：20毫秒至少要彈入一次
    
    ```jsx
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          func.apply(context, args);
        };
        if (timeout) return;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (immediate) func.apply(context, args);
      };
    }
    ```