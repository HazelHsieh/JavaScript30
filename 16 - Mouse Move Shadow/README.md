# 16 - Mouse Move Shadow

## 主題
實作一個滑鼠移動時，產生不同陰影的效果

## 實作重點

## JS

1. 先了解
    1. `offsetX` ,  `offsetY`是對應區塊的值，點到哪個就給哪個值
    2. ES6 演變
        
        ```jsx
        // NO.1 一般
        let x = e.offsetX;
        let y = e.offsetY;
        
        // NO.2 解構
        let { offsetX, offsetY } = e;
        
        // NO.3 解構賦值
        let { offsetX: x, offsetY: y } = e;
        ```
        
2. 監聽 `hero` 
    1. 取得 `hero` 的元素
    2. 監聽 `mousemove` 事件，觸發時操作 `func`: **shadow**
3. 找到滑鼠的位置(`func`: **shadow**)
    1. 取得 `hero` 的長寬，使用 `offsetWidth` , `offsetHeight` 
    2. 取得滑鼠移動的位置，使用 `offsetX` , `offsetY`
    3. 當滑鼠移動到 `h1` 範圍時，會計算該範圍的座標，所以如果在該範圍內就增加外層 `hero` 座標數值進去
    * 這裡不懂的話可以把個別的值 `console` 出來看
    
    ```jsx
    if (this !== e.target) {
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }
    ```
    
4. 陰影顯示(`func`: **shadow**)
    1. 建立一個 `hero` 中心點的變數 `walk` 
    2. 計算陰影會走到的位置，把 (滑鼠位置 /全部長度 * 100) * 2 - 100 ，中心點就會是(0, 0) ，左上(-50, -50)，右下(50, 50)，再用 `Math.round` 把數字變成整數。
        
        ```jsx
        const xWalk = Math.round(mouseX / width * walk - walk / 2);
        const yWalk = Math.round(mousey / height * walk - walk / 2);
        ```
        
    3. `text`添加陰影，使用 `style.textShadow(x, y, blur, rgba)`