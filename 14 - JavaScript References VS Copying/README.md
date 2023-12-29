# 14 - JavaScript References VS Copying

## 主題
介紹 JS 賦值時，reference(參考、傳址) 與 copying(拷貝、傳值)。

## 實作重點

## JS

可以畫圖理解 [參考文章](https://hackmd.io/@wheat0120/ryegUgEBK)

1. 先看字串、數字、布林
    
    ```jsx
    // 字串
    let age = 20;
    let age2 = age;
    console.log(age, age2); // 20 20
    age = 40;
    console.log(age, age2); // 40 20
    
    // 數字
    let c = 0;
    let d = c;
    c++
    console.log(c, d); // 1, 0
    
    // 布林
    let e = true;
    let f = e;
    e = !f;
    console.log(e, f); // false true
    ```
    
2. 陣列
    1. 因為傳參考所以如果改值，會連帶修改到
        
        ```jsx
        const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
        const team = players;
        console.log(team, players); // (4) ['Wes', 'Sarah', 'Ryan', 'Poppy']  (4) ['Wes', 'Sarah', 'Ryan', 'Poppy']
        
        team[3] = 'Hazel';
        // 結果兩個都會改到
        console.log(team, players); //  (4) ['Wes', 'Sarah', 'Ryan', 'Hazel']  (4) ['Wes', 'Sarah', 'Ryan', 'Hazel']
        ```
        
    2. 拷貝的方法
    `slice()` 、 `[].concat` 、 `Spread` 、 `Array.from` 、以及陣列會產出新陣列的方法。
        
        ```jsx
        // one way
        const team2 = players.slice();
        team2[3] = 'Hazel Hsieh';
        console.log("team2", team2, players);//  (4) ['Wes', 'Sarah', 'Ryan', 'Hazel Hsieh']  (4) ['Wes', 'Sarah', 'Ryan', 'Hazel']
        // or create a new array and concat the old one in
        const team3 = [].concat(players);
        team3[3] = 'Hazel H';
        console.log("team3", team3, players);//  (4) ['Wes', 'Sarah', 'Ryan', 'Hazel H']  (4) ['Wes', 'Sarah', 'Ryan', 'Hazel']
        // or use the new ES6 Spread
        const team4 = [...players];
        team4[3] = "haaaaaa";
        console.log("team4", team4, players); // (4) ['Wes', 'Sarah', 'Ryan', 'haaaaaa']  (4) ['Wes', 'Sarah', 'Ryan', 'Hazel']
        
        const team5 = Array.from(players)
        console.log(team5); // 4) ['Wes', 'Sarah', 'Ryan', 'Hazel']
        ```
        
3. 物件
    1. 因為傳參考所以如果改值，會連帶修改到
        
        ```jsx
        const person = {
          name: 'Wes Bos',
          age: 80
        };
        const captain = person;
        captain.number = 99;
        
        console.log(person, captain); // {name: 'Wes Bos', age: 80, number: 99} {name: 'Wes Bos', age: 80, number: 99}
        ```
        
    2. 拷貝的方法 `Object.assign` 、`Spread` 
        
        ```jsx
        // how do we take a copy instead?
        const captain2 = Object.assign({}, person, { number: 999, age: 18 })
        console.log(person, captain2); // {name: 'Wes Bos', age: 80, number: 99} {name: 'Wes Bos', age: 80, number: 999}
        
        // We will hopefully soon see the object ...spread
        const captain3 = { ...person }
        ```
        
    3. 深層拷貝 `JSON.parse(JSON.stringify(xxxx))`
        1. `function` 不適用