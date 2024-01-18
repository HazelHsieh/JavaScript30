# 27 - Click and Drag

## 主題
實作一個隨著滑鼠點擊左右移動內容的效果。

## 實作重點

## CSS

1.  可以把 `overflow` 改成 hidden 才不會漏出卷軸醜醜的

## JS

1. 取得外框元素。
2. 設定變數
    1. 滑鼠是否點擊：設定變數預設為 `false`
    2. 滑鼠起始位置：變數設為 `startX`
    3. 畫面的左右移動距離：變數設為 `scrollLeft`
3. 使用到四種滑鼠事件 `mousedown`, `mouseleave`, `mouseup`, `mousemove`，外框元素個別綁定事件監聽，即觸發事件。
4. 處理滑鼠點擊事件的變數
    1. `mousedown` ：確定滑鼠被點擊，變數改為 `true`
    2. `mouseleave`：確定滑鼠移開畫面，變數改為 `false`
    3. `mouseup`：確定滑鼠沒點擊，變數改為 `false`
    4. `mousemove`：確認滑鼠有點擊，事件再往下移
        
        ```jsx
        if (!isDown) return;
        ```
        
5. 處理滑鼠點擊後的樣式變化
    1. `mousedown` ：增加樣式 class `.active` 
        
        ```jsx
        slider.classList.add('active');
        ```
        
    2. `mouseleave`：移除樣式 class `.active` 
        
        ```jsx
        slider.classList.remove('active');
        ```
        
    3. `mouseup`：移除樣式 class `.active` 
        
        ```jsx
        slider.classList.remove('active');
        ```
        
6. 找到滑鼠點擊的 `x` 軸點位
    1. `mousedown` ：利用 `e` 找到 起始位置 =  `e.pageX` - 外框.offsetLeft 取得
        
        ```jsx
        slider.addEventListener('mousedown', (e) => {
          startX = e.pageX - slider.offsetLeft;
          console.log(startX);
        });
        ```
        
7. 計算移動的距離
    1. `mousedown` ：點擊當下已經被移動的距離
        
        ```jsx
        scrollLeft = slider.scrollLeft;
        ```
        
    2. `mousemove`：
        1.  `e.perventDefault` 停止預設行為
        2. 取得移動到的位置 = 點擊到的位置 - 外框移動的距離
            
            ```jsx
            const x = e.pageX - slider.offsetLeft;
            console.log({ x, startX });
            ```
            
        3. 取得移動的距離 = 移動到的位置 - 點擊到的位置 * 3(增加移動時的視覺感)
            
            ```jsx
            const move = x - startX
            ```
            
        4. 取得更新新的 `slider.scrollLeft` = 點擊當下已經被移動的距離 - 移動的距離
            
            ```jsx
            slider.scrollLeft = scrollLeft - move;
            ```
            

### 額外知識

1. 手機要更改事件
    1. `mousedown` → `touchstart`
    2. `mousemove` → `touchmove`
    3. `mouseup` → `touchend`