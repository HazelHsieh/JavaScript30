# 12 - Key Sequence Detection

## 主題
實作一個 Key Sequence(按鍵序列的偵測)，輸入一段特殊文字後會產生畫面

## 實作重點

## JS

1. 創兩個的變數
    1. `secretCode` 用來觸發功能
    2. `pressed` 紀錄使用者輸入的按鍵
2. 按鍵偵測：
    1. 用 `keyup` 按鍵離開時，可以得到按鍵的值 `e.key` 
    2. 把使用者按的值推到`pressed`
3. 利用 `splice` 判斷， 然後切第一筆
    
    ```jsx
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    ```
    
    - 比較好理解的方式如下
        1. `if` 判斷後 `splice` 切第一筆
            
            ```jsx
            // 等於上面那一行，少掉判斷式
             if (pressed.length > secretCode.length) {
               pressed.splice(0, 1);
             }
            ```
            
        2. `while` 迴圈判斷後 `shift`
            
            ```jsx
            while (pressed.length > secretCode.length) {
              pressed.shift();
            }
            ```
            
4. 判斷是否為預設`secretCode`
    ```jsx
    pressed.join('').includes(secretCode)
    ```