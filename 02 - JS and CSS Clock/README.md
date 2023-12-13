# 02 - JS and CSS Clock

## 主題

實作一個小時鐘。

## 實作重點

### CSS

1. 指針
    1. 先調整時間起始位置在 0 的位置，順便調整每個針的樣式
    2. 先測試加上 `rotate` 有沒有時鐘轉動的效果

### JS

1. 現在時間： `new **Date**()`
2. 時間計算：
    
    一個圓等於 360 度，再去計算對應的值
    
    1. 時針：總共 12 小時，每小時的角度為 360 度 / 12 = 30 度，把時針與分針乘上 30 度，再除掉 60 (每一小時 60 分鐘) ，算出相對準確的格數。
    2. 分針：總共 60 分鐘，每分鐘的角度為 360 度 / 60 = 6 度，把分針與秒針乘上 6 度，在除掉60 (每一分鐘 60 秒鐘)，算出相對準確的格數。
    3. 秒針：總共 60 秒鐘，每秒鐘的角度為 360 度 / 60 = 6 度。
3. 改變指針位置： `dom.style.transform = rotate(${currenHour}deg);`
4. 計時器更新畫面： 可使用`setInterval` 每秒執行一次。

## 額外知識

計時器

 `setInterval` ：設定一次，之後持續間隔多久執行一次。

```jsx
setInterval(setClock, 1000); // 每秒呼叫一次
```

 `setTimeout` ：設定一次，之後延遲多久在執行一次，如果要持續執行需要在裡面在呼叫自己。

```jsx
function timeoutHandler() {
  setClock();
  setTimeout(timeoutHandler, 1000);
}
setTimeout(timeoutHandler, 1000);
```
`requestAnumationFrame` ：刷新頻率跟隨電腦硬體本身。使用方法與`setTimeout` 類似，是處理畫面上的`setTimeout`。

```jsx
function animationHandler() {
  setClock();
  window.requestAnimationFrame(animationHandler);
}
window.requestAnimationFrame(animationHandler);
```