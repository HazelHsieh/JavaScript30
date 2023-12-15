# 04 - Array Cardio Day 1

## 主題
練習 JavaScript Array 的方法，可以對照 MDN 文件： [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 、 [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 、 [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 、 [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 。

# 實作重點

## JS

1. `filter()`：用來篩選資料，並回傳篩選後(為真)的新陣列。不改變原陣列。
    
    ```jsx
    // 1. Filter the list of inventors for those who were born in the 1500's
    const filterBornYear = inventors.filter(inventors => inventors.year >= 1500 && inventors.year < 1600);
    console.table(filterBornYear);//會以table的形式顯示。
    ```
    
2. `map()`：依條件組合物件資訊，並回傳新陣列。不改變原陣列。
    
    ```jsx
    // 2. Give us an array of the inventor first and last names
    const fullName = inventors.map(inventors => inventors.first + inventors.last);
    console.log(fullName);
    ```
    
1. `sort()` ：依大小排序，比較兩個值，並回傳一個陣列。會改變原陣列。若要`a < b`，就 `a - b` ; 若要`a > b`，就 `b - a` 。
    
    ```jsx
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort((a, b) => a.year - b.year; //排序出生日期
    ```
    
2. `reduce()` ：依數字相加，並回傳一個值。第一段是 `function` (數值,陣列名) ，第二段是執行的起始值 。
    
    ```jsx
    // 4. How many years did all the inventors live?
    //                                    數值 , 陣列名(依index跑)
    const totalYears = inventors.reduce((total, inventor) => { 
    	return total + (inventor.passed - inventor.year)
    //起始值
    }, 0);
    console.log(totalYears);
    ```
    
3. `sort()` ：再練習一次
    
    ```jsx
    // 5. Sort the inventors by years lived
    console.log(`NO.5`);
    const oldest2 = inventors.sort((a, b) => {
      return (a.passed - a.year) - (b.passed - b.year)
    })
    console.table(oldest2);
    ```
    
4. `map()` + `filter()` ：多使用 `Array.from` 、 `includes()`
    
    ```jsx
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const category = document.querySelector('.mw-category');
    const likes = Array.from(category.querySelectorAll('a')); // 複習 querySelectorAll 取得的值是 NodeList 所以用 Array.from 轉為陣列
    const de = links
          .map(link => link.textContent)
          .filter(streetName => streetName.includes('de')); // includes() 方法會判斷陣列是否包含特定的元素
    ```
    
5. `sort()`：再練習一次 ， 多使用到`split()`
    
    ```jsx
    // Sort the people alphabetically by last name
    const fullName2 = people.sort((a, b) => {
      let [aLast, aFirst] = a.split(', ');
      let [bLast, bFirst] = b.split(', ');
      return aLast > bLast ? 1 : bLast > aLast ? -1 : 0;
    })
    console.log(fullName2);
    ```
    
6. `reduce()` ：再練習一次 
    
    ```jsx
    // Sum up the instances of each of these
    const countNum = data.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item]++;
      }
      return obj;
    }, {})
    console.table(countNum);
    ```
    

### 額外知識

- **`console: table()` : [MDN](https://developer.mozilla.org/en-US/docs/Web/API/console/table_static)** 第一次看到也可以這樣呈現。
    - 必須是陣列或物件。
    - 第一行(column)會是 `index` ，之後依序資料的值呈現。
    第一列(row)會是屬性名稱，之後依序資料的值呈現。
- `map` 與 `forEach` 的差別：
    - `map` 會直接 retutn 值。tips：如果想要為陣列加上東西，並且要產生新陣列去對應可以使用`map`
    - `forEach` 需要說明要分別做哪些事。 tips：如果想要為陣列加上東西，沒有要產生新陣列可以使用 `forEach`
        - 例題 2 ，使用 `forEach`
            
            ```
            const fullName = [];
            inventors.forEach(inventors => fullName.push(inventors.first + inventors.last))
            console.log(fullName);
            ```
            
        - 例題 4 ，使用 `forEach`
            
            ```jsx
            let total = 0
            inventors.forEach(inventor => {
              total += inventor.passed - inventor.year;
            })
            console.log(total); // 861
            ```
            
        - 例題 5 , 使用 `forEach` 加上年齡
            
            ```jsx
            console.log(`NO.5`);
            const oldest2 = inventors.sort((a, b) => {
              return (a.passed - a.year) - (b.passed - b.year)
            })
            inventors.forEach((inventor) => {
              inventor.age = inventor.passed - inventor.year
            })
            console.table(oldest2);
            ```
            
- `sort()` ： 現在的瀏覽器都是穩定排序比較多，以往會有不穩定排序，因為比較不會佔效能。
    - 預期是原本的序列，去做排序先來的當然會優先排序。
        
        ```jsx
        const array1 = [{ attributes: 1, value: 1 }, { attributes: 2, value: 4 }, { attributes: 3, value: 9 }, { attributes: 4, value: 4 }, { attributes: 5, value: 16 }];
        const compareNumbers = array1.sort((a, b) => a.value - b.value)
        console.table(compareNumbers);
        ```
        
        - 穩定排序：不管重整幾次都會得到相同的值。
            
        - 不穩定排序：高機率重整得到不一樣的值。
            
            ```jsx
            // 上面的程式修改成這樣就會得到非預期的結果
            const compareNumbers = array1.sort((a, b) => a.value > b.value ? 1 : -1)
            ```
            