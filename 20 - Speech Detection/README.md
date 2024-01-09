# 20 - Speech Detection

## 主題
實作一個語音輸入文字輸出的工具。

## 實作重點

## JS

可以搭配[文件](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

1. 安裝/啟動
    1. 利用`npm`來安裝：npm i
    2. 開啟：npm start
2. 啟動語音
    1. 驅動語音轉換的 Chrome API : `window.SpeechRecognition` ，Firefox 語音轉換 `window.webkitSpeechRecognition`
3. 辨識語音設定
    1. 先宣告
        
        ```jsx
        const recognition = new SpeechRecognition();
        ```
        
    2. 使用 `interimResult` 控制語音辨識返回是即時或完整講完
        
        ```jsx
        recognition.interimResult = true;
        ```
        
    3. 使用 `lang` 設定辨識的語言
4. 文字呈現
    1. 使用 `p` tag 和 `appendChild()` 讓文字顯示上去
        
        ```jsx
        let p = document.createElement('p');
        const words = document.querySelector('.words');
        words.appendChild(p);
        ```
        
    2. 監聽 recognition ，啟動監聽 `start()` 說話測試，看 `console` 有沒有值跑出
        
        ```jsx
        recognition.addEventListener('result', e => {
          console.log(e);
        })
        recognition.start();
        ```
        
    3. 細找文字說話的紀錄會在 `transcript` 裡面
        
        ```jsx
        // e.results[0][0].transcript;
        ```
        
    4. 使用 `Array.from` , `map` 把資料撈出來，用 `join` 把資料連接起來
        ```jsx
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        ```
    5. 使用 `textContent` 把資料寫進畫面
        
        ```jsx
        p.textContent = transcript;
        ```
        
    6. 使用 `isFinal` 增加判斷，確認句子說完了沒，說完才跳下一段落
        
        ```jsx
        if (e.results[0].isFinal) {
          p = document.createElement('p');
          words.appendChild(p);
        }
        ```
        
5. 當 speech recognition 服務中斷時再觸發
    
    ```jsx
    recognition.addEventListener('end', recognition.start);
    ```
    
6. 判斷特定文字產生效果
   ```jsx
    const poopScript = transcript.replace(/大便|拉屎/gi, '💩');
    p.textContent = poopScript;
    // p.textContent = transcript;
    ```