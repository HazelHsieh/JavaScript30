# 01 - JavaScript Drum Kit

## 主題

利用鍵盤按鍵去觸發畫面上的呈現與音效。

## 實作重點

### JS

1. 鍵盤事件`keyboardEvent` ：使用 `keydown` 觸發功能，利用 data-key 對應`keyCode` 來找到按下去的是哪一個按鍵，找到對應的 dom `audio/div[data-key="${e.keyCode}"]` 去操作它
2. 樣式
    1. 找到 `dom` 改變樣式 `dom.classList.**add**('playing')`
    2. 當 e.propertyName 等於 transform 時要移除樣式 **`remove**('playing')`
3. 聲音
    1. 找到 `audio`播放音樂 `audio.play()`
    2. 連續觸發可用 `audio.currentTime = 0`
4. 移除樣式：利用 `forEach` 去監聽 ，當 `transitionend` 事件發生，執行 callback  `transitionendSound`

### CSS

1. transform：會放大縮小
2. transition：動畫效果