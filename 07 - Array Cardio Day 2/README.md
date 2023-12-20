# 07 - Array Cardio Day 2

## 主題
練習 JavaScript Array 的方法，可以對照 MDN 文件：[Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 、 [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 、 [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 、 [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)、[Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 、 [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 。


## 實作重點

## JS

1. `some()`：用來判斷元素中有沒有**`一些`**符合條件，會回傳 `true` 或 `false`
    
    ```jsx
    // Array.prototype.some() // is at least one person 19 or older?
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log(isAdult);
    ```
    
2. `every()` ：用來判斷元素中有沒有**`全部`**符合條件，會回傳 `true` 或 `false`
    
    ```jsx
    // Array.prototype.every() // is everyone 19 or older?
    const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log(allAdult);
    ```
    
3. `find()` ：有點像 `filter` ，會回傳符合你要的資料，只回傳第一筆
    
    ```jsx
    // find the comment with the ID of 823423
    const comment = comments.find(comment => comment.id === 823423)
    console.log(comment);
    ```
    
4. `findIndex()` ：尋找指定元素中有符合條件，會回傳一個 `index` 值，只回傳第一筆，找不到時回傳 -1
    
    ```jsx
    // Find the comment with this IDs
    const Index = comments.findIndex(comment => comment.id === 823423)
    console.log(Index);
    ```
    
5. `splice()` ：直接對著原始資料操作，刪除陣列資料、也可以加東西，`splice(index, 刪除幾個, 要加什麼)` 
    
    ```jsx
    comments.splice(Index, 1)
    ```
    
6. `slice()` ： 不會動到原始的資料，`slice(起, 迄)` 是切 `index` 的前面 
    
    ```jsx
    const useSlice = [
      ...comments.slice(0, Index),
      ...comments.slice(Index + 1)
    ]
    console.log(useSlice);
    ```