# 29 - Countdown Timer

## 主題
實作一個倒數計時器。

## 實作重點

## JS

1. 取得元素
    1. 倒數計時器的數字顯示
    2. 預計結束時間的顯示
    3. 所有的按鈕
2. 倒數計時器功能
    1. 製作一個 `func`: timer
        
        ```jsx
        function timer() {}
        ```
        
    2. 宣告一個現在的時間, 
    一個結束的時間(傳進來的參數 + 現在時間)
        
        ```jsx
        const now = Date.now();
        const then = now + seconds * 1000;
        ```
        
    3. 使用 `setInterval` ****做倒數的功能
        1. 在外層宣告一個倒數的變數 
            
            ```jsx
             let countdown;
            ```
            
        2. 倒數的變數觸發 `setInterval` **，**每16毫秒更新一次(1000/60 比較不會有跳號的問題)
            
            ```jsx
            countdown = setInterval(() => {}, 16)
            ```
            
        
        1. 宣告一個剩餘秒數的變數值為 (結束的時間 - 現在時間)/ 1000
            
            ```jsx
            const secondsLeft = Math.floor((then - Date.now()) / 1000);
            ```
            
        2. 計時器判斷，小於零秒就停止
            
            ```jsx
            secondsLeft < 0 ? clearInterval(countdown) : displayTimeLeft(secondsLeft);
            ```
            
3. 倒數結束時間的顯示 
    1. 製作一個 `func`: displayTimeLeft
        
        ```jsx
        function displayTimeLeft() {}
        ```
        
    2. 宣告一個分鐘的變數值為帶進來的參數/60
        
        ```jsx
        const minutes = Math.floor(seconds / 60)
        ```
        
    3. 宣告一個剩餘秒數值為分鐘的變數取60的餘數
        
        ```jsx
        const remainderSeconds = seconds % 60;
        ```
        
    4. 把剩餘時間呈現到畫面上
        1. 時間整理，如果小於 10 前面加上零
            
            ```jsx
            const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds
            ```
            
        2. 使用 `textContent` 呈現至畫面
            
            ```jsx
            document.title = display;
            timerDisplay.textContent = display;
            ```
            
    5. 把`func`: displayTimeLeft 放到 `func`: timer 中，當`func`: timer有觸發就會順便跑出倒數結束時間(`func`: timer)
        
        ```jsx
        displayTimeLeft(seconds);
        ```
        
4. 預計結束時間的顯示 
    1. 製作一個 `func`: displayEndTime
        
        ```jsx
        function displayEndTime(timestamp) {}
        ```
        
    2. 宣告一個結束的時間值為 displayEndTime 帶入的參數
        
        ```jsx
        const end = new Date(timestamp);
        ```
        
    3. 從結束的時間中換算小時與分鐘
        
        ```jsx
        const hour = end.getHours();
        const minutes = end.getMinutes();
        ```
        
    4. 把結束時間呈現到畫面上
        
        ```jsx
        endTime.textContent = `Be Back At ${hour}:${minutes}`
        ```
        
    5. 把`func`: displayEndTime 放到 `func`: timer 中，當`func`: timer有觸發就會順便跑出預計結束時間(`func`: timer)
        
        ```jsx
        displayEndTime(then);
        ```
        
5. 按鈕事件觸發計時器功能
    1. 使用 `forEach` 監聽全部的 `button` 是否有點擊事件，即觸發 `func`: startTime
        
        ```jsx
        function startTimer() {
          console.log("start");
        }
        buttons.forEach(button => button.addEventListener('click', startTimer))
        ```
        
    2. 取出綁定的 `data-time` 再啟動 `timer` 即可
        
        ```jsx
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
        ```
        
    3. 反覆點擊按鈕會有前一個倒數器還在執行，所以在 `timer` 加清除計時器(`func`: timer)
        
        ```jsx
        clearInterval(countdown);
        ```
        
6. input 輸入倒數時間
    1. 監聽 form 表單 是否有 submit 事件，即觸發 `func`: startInputTime
        
        ```jsx
        function startInputTime(e) {}
        document.customForm.addEventListener('submit', startInputTime);
        ```
        
    2. 停止預設事件
        
        ```jsx
        e.preventDefault();
        
        ```
        
    3. 用 this 取出值，判斷是否是 mins ，再啟動 `timer` 
        
        ```jsx
        const mins = parseInt(this.minutes.value);
        if (mins) {
          timer(mins * 60);
          this.reset();
        }
        ```
        
    4. 開始倒數清空 input
        ```jsx
        this.reset();
        ```