# 10 - Hold Shift and Check Checkboxes

## 主題
實作出按住 `Shift` 點擊 check list ，達到連續選取的效果

## 實作重點

## JS

1. 類陣列轉陣列：先抓到全部的 `input` 使用 `querySelectorAll` 是類陣列使用 `Array.form` 轉成陣列。
2. 找出每個打勾起來的：`forEach` 監聽每個 `check` 是否打勾
3. 找到 `shiftKey` ：建立一個 `function` 在點擊 `e` 事件中點開`PointerEvent` 可以找到，如果按住 `shift` 鍵點擊時，`shiftKey` 會變成 `true` 。
4. 建立一個最後點擊的變數，備用。
5. 如果有點擊 
    1. 再判斷如果點擊時有按著 `shiftKey`
        1. 紀錄第一個點擊的 `index`：判斷是否有按著 `shiftKey` 和勾 `checkbox` ，有就用 `indexOf` 找到值
        2. 用 `slice` 找到點擊的區間： 因為不確定使用者怎麼點，所以用 `Math.min` 和 `Math.max` 找到對應值
        3. 再利用 `forEach` 把區間的都打勾
    2. 記錄 `index` 第幾筆ㄌ
6. 如果沒有點擊
    1. 記錄 `null`
