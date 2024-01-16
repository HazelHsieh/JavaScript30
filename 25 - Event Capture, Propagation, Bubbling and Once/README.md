# 25 - Event Capture, Propagation, Bubbling and Once

## 主題
了解 addEventListener 中的第三個參數 Event Bubbling(冒泡事件), Event Capture(捕捉事件), Propagation(傳遞), Once(僅執行一次)

 

addEventListener的三個參數 ： addEventListener(事件, 回呼, 設定)

之前有看過[彭彭的課程](https://www.youtube.com/watch?v=3cTdztTmtL0&t=6803s)有興趣也可以看一下

## 實作重點

## JS

1. 冒泡事件：觀察一下 `console` ，由內到外
    
    ```jsx
    const dives = document.querySelectorAll('div');
    function logText(e) {
      console.log(this);
    }
    dives.forEach(div => div.addEventListener('click', logText))
    ```
    
    1. 加上 `.bod` 看一下 `console` 效果
        
        ```jsx
        document.body.addEventListener('click', logText);
        ```
        
2. 捕捉事件：觀察一下 `console` ，由外到內
    1. 在 `div` 監聽事件後加上 `capture` 值為 true(預設是false)
3. 傳遞：停止後續的傳遞，在 `func`: **logText** 加上
    
    ```jsx
    e.stopPropagation()
    ```
    
4. 僅執行一次：觀察一下 `console` ，觸發幾次
    1. 監聽 `btn` 是否有點擊事件，即觸發立即函式 `console` 
    2. 在 `btn` 監聽事件後加上 `once` 值為 true(預設是false)

### 額外知識

1. **`composedPath**()` : 可以把整個事件的路徑打印出來。
2. 綁定事件與委派事件：觀察一下 `console` 
    
    先製作三個 `a` 在 `ul` `li` 裡
    
    ```jsx
    <ul>
      <li><a href="#">button 1</a></li>
      <li><a href="#">button 2</a></li>
      <li><a href="#">button 3</a></li>
    </ul>
    ```
    
    1. 綁定事件：單獨綁定，如果後來有新增，可能就吃不到效果
        
        ```jsx
        let as = document.querySelectorAll('a');
        function aHandler(e) {
          e.preventDefault();
          console.log("binding A Click", this);
        }
        as.forEach(dom => {
          dom.addEventListener('click', aHandler)
        })
        ```
        
    2. 委派事件：綁定在外層，監聽內部如果有特定的值就會觸發效果
        
        ```jsx
        let ul = document.querySelector("ul");
        function ulHandler(e) {
          if (e.target.nodeName === "A") {
            e.preventDefault();
            console.log("delegate A Click", e.target);
          }
        }
        ul.addEventListener('click', ulHandler);
        ```
        
    3. 藉由委派事件了解 `target` 與 `currentTarget` ：觀察一下 `console` 
        
        ```jsx
        function ulHandler(e) {
          console.log("target", e.target, "currentTarget", e.currentTarget);
        }
        ```
        
        1. `target` : 點到的那個
        2. `currentTarget` : 委派綁定事件的那個