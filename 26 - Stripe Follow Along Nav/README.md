# 26 - Stripe Follow Along Nav

## 主題
實作一個隨著滑鼠停留後會下拉的選單列效果。

## 實作重點

可以思考一下，動畫出現的時機。

## CSS

先製作出樣式

1.  滑鼠停留後會有下拉選單跑出來，新增
    1. `.dropdown` + class
        1. `.trigger-enter` 的 `display` 改成 `block`
        2.  `.trigger-enter-active` 的 `opacity` 改成 `1`
    2. `.dropdownBackground` + calss
        1. `.open` 的 `opacity` 改成 `1`

## JS

1. 先取得元素
    1. 會觸發效果的 `li`
    2. 下拉選單的背景 `dropdownBackground`
    3. 選單列 `navbar`
    4. `console` 出來看看是否有選到
2. 使用 `forEach` 監聽所有 `li` 再做效果
    1. 如果有滑鼠移入的事件，就觸發 `func`: enterHandler
    2. 如果有滑鼠移出的事件，就觸發 `func`: leaveHandler
    3. `console` 出來看看是否會觸發
3. 滑鼠移入的樣式效果(`func`: enterHandler)
    1. 增加 class `.trigger-enter`
        
        ```jsx
        this.classList.add('trigger-enter');
        ```
        
    2. 設定時間等待 150毫秒再新增 class `'trigger-enter-active'`
        
        ```jsx
        setTimeout(() => this.classList.add('trigger-enter-active'), 150)
        ```
        
    3. 點擊效果測試
4. 滑鼠移除的移掉樣式(`func`: leaveHandler)
    1. 移除 class `.trigger-enter`,`'trigger-enter-active'`
        
        ```jsx
        this.classList.remove('trigger-enter', 'trigger-enter-active');
        ```
        
    2. 點擊效果測試
5. 滑鼠移入移出的背景樣式
    1. 滑鼠移入(`func`: enterHandler)
        
        ```jsx
        background.classList.add('open');
        ```
        
    2. 滑鼠移除(`func`: leaveHandler)
        
        ```jsx
        background.classList.add('open');
        ```
        
6. 調整移入時的背景樣式位置，因為會發現背景在左上角，不是我們預期的地方。
    1. 先找到點擊的是哪一個
        
        ```jsx
        const dropdown = this.querySelector('.dropdown');
        console.log(dropdown);
        ```
        
    2. 使用 `getBoundingClientRect()` 得到 `nav` 和點擊到的 `dropdown` 寬高
        
        ```jsx
        const dropdownCoords = dropdown.getBoundingClientRect();
        const navCoords = nav.getBoundingClientRect();
        console.log(dropdownCoords, navCoords);
        ```
        
    3. 把得到的寬高賦值到 `background` 
        
        ```jsx
        const coords = {
          height: dropdownCoords.height,
          width: dropdownCoords.width,
        }
        background.style.setProperty('height', `${coords.height}px`);
        background.style.setProperty('width', `${coords.width}px`);
        ```
        
    4. 再把點擊到的 `dropdown` 位置取出並減掉 `nav` 的位置，賦值到 `background` 
        
        ```jsx
        const coords = {
          top: dropdownCoords.top - navCoords.top,
          left: dropdownCoords.left - navCoords.left,
        }
        background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
        ```
        
7. 調整下拉選單出現時機，因為會發現如果滑鼠快速移動，下拉選單會有點混亂。
    1. 使用 **`contains()`** 檢查是否有 class `trigger-enter` ，有再添加 `trigger-enter-active` class
        
        ```jsx
        setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150) 
        ```
        

### 額外知識

滑鼠事件與委派事件

`mouseenter` , 
`mouseleave` ：無法使用委派事件，因為只會觸發一次

```jsx
const ul = document.querySelector('.cool');
ul.addEventListener('mouseenter', inHandler);
ul.addEventListener('mouseleave', outHandler);

function inHandler() {
  console.log('in');
}
function outHandler() {
  console.log('out');
}
```

`mouseover`,

`mouseout` : 可以使用委派事件，觸發多次

```jsx
const ul = document.querySelector('.cool');
ul.addEventListener('mouseover', inHandler);
ul.addEventListener('mouseout', outHandler);

function inHandler() {
  console.log('in');
}
function outHandler() {
  console.log('out');
}
```

1. 先用 `composedPath()` 找到事件的路徑
    
    ```jsx
    function inHandler(e) {
      console.log('in', e.composedPath());
    }
    function outHandler(e) {
      console.log('out', e.composedPath());
    }
    ```
    
2. 增加判斷，在點擊到 `a` 連結在觸發事件
    
    ```jsx
    function inHandler(e) {
      const path = e.composedPath()
      if (path[0].nodeName == 'A') console.log('in');
    }
    function outHandler(e) {
      const path = e.composedPath()
      if (path[0].nodeName == 'A') console.log('out');
    }
    ```
    
3. 使用委派事件就可以用在動態選單了，但是要多寫很多判斷，所以要小心建議有工具(JQ)比較好。