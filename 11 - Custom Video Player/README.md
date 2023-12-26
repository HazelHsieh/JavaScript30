# 11 - Custom Video Player

## 主題
利用 `<video>` 標籤，實作影片播放器的基礎功能

## 實作重點

先看一看 [MDN 文件](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)，對照事件會比較清楚，分別有用到 `controls` , `currenTime` , `duration` , `paused` , `playbackRate` , `valume` . Methods :  `pause()` , `play()` . Events : `play` , `pause`。

JS 有用到滿多`中括號`取值的可以好好吸收。

## JS

1. 控制影片開始與暫停
    1. 先用三元運算子判斷 `paused` ，再用中括號取 `key` 值，之後直接呼叫
        
        ```jsx
        function toggleHandler() {
          const method = video.paused ? 'play' : 'pause';
          video[method]();
        }
        ```
        
    2. 修改按鈕開始和暫停的樣式
2. 影片往前/倒退
    1. 利用 `data-set` 傳值給  `currentTime` 改變影片時間
3. 控制聲音與影片速度
    1. 在 `input` 放了兩個 name，透過 name 來傳值，利用中括號改變值
4. 影片進度條更新
    1. 算影片長度：利用 `currentTime` (現在時間)/ `duration` (總時間) * 100 得到長度的百分比
    2. 修改預設寬度：把得到的百分比給 `flexBasis` (預設寬度)
5. 點擊進度條影片更新
    1. 算影片時間：另用 `e.offsetX`(點擊到x的座標)/ `offsetWidth` (整個長度) * `duration` (總時間)
    2. 修改影片時間：把得到的百分比給  `currentTime`
6. 滑鼠移動時進度條影片更新
    1. 利用 `mousemove` 來觸發， `&&` 等於前面是對的，就會往後做
        
        ```jsx
        progress.addEventListener('mousemove', (e) => mousedown && scrubHandler(e));// && 等於前面是對的，就會往後做
        progress.addEventListener('mousedown', () => mousedown = true);
        progress.addEventListener('mouseup', () => mousedown = false);
        ```
        
7. 本篇將 `function` 拆分功能，再依事件去觸發行為，日後維護會比較好找方向。
    1. 開始暫停
        
        ```jsx
        // 開始暫停控制
        video.addEventListener('click', toggleHandler);
        toggle.addEventListener('click', toggleHandler);
        // 被觸發的開始暫停事件
        video.addEventListener('play', updateButton);
        video.addEventListener('pause', updateButton)
        ```
        
    2. 進度條
        
        ```jsx
        video.addEventListener('timeupdate', progressHandler);
        ```
        
    3. 影片往前或倒退
        
        ```jsx
        skipBtns.forEach(btn => btn.addEventListener("click", skipHandler));
        ```
        
    4. 控制聲音與影片速度
        
        ```jsx
        ranges.forEach(range => range.addEventListener("change", rangeUpdateHandler));
        ranges.forEach(range => range.addEventListener("mousemove", rangeUpdateHandler));
        ```
        
    5. 進度條控制
        
        ```jsx
        let mousedown = false;
        progress.addEventListener('click', scrubHandler);
        progress.addEventListener('mousemove', (e) => mousedown && scrubHandler(e)); // && 等於兩個 T 才回傳，所以第一個是 F 就不會觸發
        progress.addEventListener('mousedown', () => mousedown = true);
        progress.addEventListener('mouseup', () => mousedown = false);
        ```
        

 

### 額外知識

- `<video>` ：裡面有 `controls` 可以加，加了就有基礎功能了ＸＤ
- 判斷式省略技巧 ：
    - `&&` ：前面是對的就會往後做
    - `||` ：前面是錯的就會往後做