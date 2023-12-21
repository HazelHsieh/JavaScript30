# 08 - Fun with HTML5 Canvas

## 主題

利用 Html 的`canvas` 標籤搭配 JS 做出畫布的效果。實現畫筆顏色(`hsl`)和粗細變化。

## 實作重點

## JS

1. `canvas` 指令操作：[MDN文件](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/canvas)，主要是操作 `canvas` 的 `getContext`
    1. 處理 2d 的
        
        ```jsx
        const ctx = canvas.getContext("2d");
        ```
        
    2. `strokeStyle`：線條顏色
    3. `lineWidth`：線條粗細 
    4. `lineCap`：線條末端結束  
    5. `lineJoin`：線條曲線  
2. 滑鼠指令操作：
    1. 滑鼠點擊設定
        1. `mousedown` ：取得滑鼠位置為繪製的起始點
        2. `mousemove` ：繪製的路徑
        3. `mouseup` ：開始繪製
        4. `mouseleave` ：劃超出範圍，也可以用`mouseout` 
    2. 開始繪製
        1. 先設定是否為繪製中的變數，初始值為 `false` ，在 `mousedown` 時變成 `true` ， `mousemove` 裡面做想做的事情
        2. 記住畫筆位置： `x.offsetX` 、`x.offsetY` 
        3. 開始畫圖：`ctx.beginPath();`
        4. 畫筆移到點下去的位置： `moveTo`
        5. 畫筆移動到哪裡： `lineTo`
        6. 畫的功能： `stroke()`
    3. 畫筆顏色變化
        1. 用變數去改變 `hsl` 的值
            
            ```jsx
            let colorDeg = 0; //初始
            ctx.strokeStyle = `hsl(${colorDeg},100%,50%)`; //初始
            
            colorDeg = colorDeg < 360 ? colorDeg + 1 : 0;
            ctx.strokeStyle = `hsl(${colorDeg},100%,50%)`;
            ```
            
    4. 畫筆由粗到細，由細到粗
        1. 用變數去改變，在用方向去加減
            
            ```jsx
            let lineWidthNum = 50; //初始
            let direction = -1; //初始
            
            if (lineWidthNum < 1 || lineWidthNum > 50) {
            	// 如果小於 1 或大於 50 就 *-1
              direction *= -1;
            }
            lineWidthNum += direction; // 這裡就會是加或減
            ctx.lineWidth = lineWidthNum; // 賦予上去
            ```