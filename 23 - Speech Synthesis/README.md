# 23 - Speech Synthesis

## 主題
實作一個文字輸入語音輸出的工具，有播放、暫停、語速、音量調整功能。

## 實作重點

## JS

1. 可以搭配文件 [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) 、Window事件 **:** [speechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis)
2. 先調用語音 api 物件
    
    ```jsx
    const msg = new SpeechSynthesisUtterance();
    ```
    
3. 設定 api 物件為畫面文字轉成語音內容，順便 console 出來看一下
    
    ```jsx
    msg.text = document.querySelector('[name="text"]').value;
    console.log(msg);
    ```
    
4. 利用 `speechSynthesis` 監聽 voices 事件變化，有就操作 `func`: populateVoices 來取得聲音。
    1. 建立事件，取得聲音
        
        ```jsx
        function populateVoices() {
          vices = this.getVoices();
          console.log(voices);
        }
        speechSynthesis.addEventListener('voiceschanged', populateVoices);
        ```
        
5. 利用 `innerHTML`,  `map`, `join` 新增下拉選單內容(`func`: populateVoices)
    
    ```jsx
    voicesDropdown.innerHTML = voices
    	.map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
    	.join('');
    ```
    
    - 此時輸入 speechSynthesis.**speak**(msg) 時就會說出對話框裡的文字了
    
6. 建立下拉選單變更的事件
    1. 監聽 `voicesDropdown` 是否有改變，即觸發 `func`: setVoice
        
        ```jsx
        function setVoice() {
          console.log('Changing voice');
        }
        voicesDropdown.addEventListener('change', setVoice)
        ```
        
    2. 利用`find` 找到點擊到的 `this.value` 與 `voice.name` 一樣，就賦值給 msg
        
        ```jsx
        msg.voice = voices.find(voice => voice.name === this.value);
        ```
        
7. 製作語音播放、暫停功能
    1. 先建立 `func`: toggle，如果 `startOver`為 true 時播放。
        
        ```jsx
        function play(startOver = true) {
          speechSynthesis.cancel();
          if (startOver) {
            speechSynthesis.speak(msg);
          }
        }
        ```
        
    2. 監聽 `speakButton` 是否有被點擊，即觸發 `func`: toggle
        
        ```jsx
        speakButton.addEventListener('click', toggle);
        ```
        
    3. 監聽 `stopButton` 是否有被點擊，即觸發 `func`: **play**，並傳入 `false`
        
        ```jsx
        stopButton.addEventListener('click', () => play(false));
        ```
        
8. 製作文字框、語速、音量調整功能
    1. 利用 `,` + **`querySelectorAll`**  把文字框和拖拉條選起來
        
        ```jsx
        const options = document.querySelectorAll('[type="range"], [name="text"]');
        ```
        
    2. 利用 `forEach` 找出對應的 option 再監聽是否有改變，即觸發 `func`: setOption
        
        ```jsx
        options.forEach(option => option.addEventListener('change', setOption));
        ```
        
    3. 把有改變的屬性賦予新的值
        ```jsx
          msg[this.name] = this.value;
        ```