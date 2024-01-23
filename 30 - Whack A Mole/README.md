# 30 - Whack A Mole

## 主題
實作一個打地鼠的遊戲，有計分/計時功能。

## 實作重點

[alex 版本](https://codepen.io/achen224/pen/NWPaadG)

## JS

1. 取得元素
2. 設定隨機時間(第28天的範圍公式)
    
    ```jsx
    function randomTime(min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }
    ```
    
3. 設定隨機的地鼠洞
    1. 取得 `holes` ，利用 `holes.length` 來製造隨機的 `index`
        
        ```jsx
        function randomHole(holes) {
        	const index = Math.floor(Math.random() * holes.length);
        	console.log(holes);
        	console.log(holes.length);
        }
        ```
        
    2. 把隨機的 `index` 賦值到地鼠洞
        
        ```jsx
        const hole = holes[index]
        ```
        
    3. 處理隨機數字不要跟前一個一樣
        1. 宣告一個最後的地鼠洞
        2. 如果最後一個地鼠洞跟新出來的地鼠洞一樣就在跑一次
            
            ```jsx
            if (lastHole === hole) {
              return randomHole(holes);
            }
            ```
            
        3. 不一樣就把新出來的地鼠洞賦值給最後一個地鼠洞
            
            ```jsx
            lastHole = hole;
            return hole;
            ```
            
4. 地鼠彈出
    1. 利用 **`randomTime` 、`randomHole`** 隨機的結果
        
        ```jsx
        function peep() {
          const time = randomTime(200, 1000);
          const hole = randomHole(holes);
          console.log(time, hole);
        }
        ```
        
    2. 把地鼠洞賦予新的 class
        
        ```jsx
        hole.classList.add('up');
        ```
        
    3. 利用 `time` 製造隨機時間把 class 移除
        
        ```jsx
        setTimeout(() => {
          hole.classList.removeClass('up');
        },time); 
        ```
        
    4. 讓地鼠重複彈出
        
        ```jsx
        setTimeout(() => {
          hole.classList.remove('up');
          peep();
        }, time);
        ```
        
5. 設定遊戲開始加時間限制
    1. 宣告一個計時器到時值為 `false`
    2. 在 `func`: peep 中加入如果時間到就停止的判斷
        
        ```jsx
        if (timeUp) return;
        ```
        
    3. 寫一個 `func`: startGame ，設定計時器如果時間到了就把計時器值改為 `true`
        
        ```jsx
        function startGame() {
          timeUp = false;
          peep();
          setTimeout(() => timeUp = true, 10000)
        }
        ```
        
    4. 製作按鈕觸發
        
        ```jsx
        <button onClick="startGame()">Start!</button>
        ```
        
6. 設定點擊到的地鼠
    1. 利用 `forEach` 監聽每個 `mole` 是否有點擊事件，即觸發 `func`: bonk
        
        ```jsx
        function bonk(e) {
          console.log(e);
        }
        moles.forEach(mole => mole.addEventListener('click', bonk))
        ```
        
        1. 會看到一個 **`isTrusted**: true`
    2. 如果 **`isTrusted**: true` 就加分
        1. 宣告一個分數初始值為零
        2. 在開始遊戲的 `func`: startGame ，把分數歸零
        3. 如果 **`isTrusted**: true` 就加分
            
            ```jsx
            if (e.isTrusted) {
              score++;
            }
            ```
            
        4. 加分後要把地鼠移除
            
            ```jsx
            this.classList.remove('up');
            ```
            
        5. 使用 `textContent` 把加分賦值到總分板
            
            ```jsx
            scoreBoard.textContent = score;
            ```
            
        6. 在開始遊戲的 `func`: startGame ，把總分板分數歸零