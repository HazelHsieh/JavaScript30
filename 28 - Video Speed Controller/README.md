# 28 - Video Speed Controller

## 主題
實作一個影片播放器的調整播放速度 bar。

## 實作重點

## JS

1. 取得元素：速度條外框、速度條內框、音樂
2. 監聽速度條外框是否有 `mousemove`(滑鼠移動事件)，即觸發 `func`: speadHandler
3. 取得速度條外框的點擊高度 = 畫面的Y軸 - 點擊的到的高度 (`func`: speadHandler)
    
    ```jsx
    const y = e.pageY - this.offsetTop;
    ```
    
    1. 換算成百分比
        
        ```jsx
        const yPercent = y / this.offsetHeight;
        ```
        
4. 速度條樣式 (`func`: speadHandler)
    1. 取到的 `yPercent` 賦值給速度條內框的高度
        
        ```jsx
        speedBar.style.height = Math.floor(yPercent * 100) + '%';
        ```
        
    2. 速度條速度文字顯示
        1. 預設最大最小值
            
            ```jsx
            const min = 0.4;
            const max = 4;
            ```
            
        2. 當前速度計算
        範圍調整公式：(0~1) * (大 - 小) - 小
            
            ```jsx
            const playbackRate = yPercent * (max - min) + min;
            ```
            
        3. 取到的速度賦值給速度條內框
            
            ```jsx
            speedBar.textContent = playbackRate.toFixed(2) + 'x';
            ```
            
5. 把當前的速度賦值給影片的速度 (`func`: speadHandler)
    
    ```jsx
    video.playbackRate = playbackRate;
    ```
    