# 19 - Webcam Fun

## 主題
實作一個 Webcam ，有拍照、下載、濾鏡的效果

## 實作重點

## JS

1. 在驅動 webcam 前需要有一個 localhost 服務器，檔案裡有 `package.json` 先跑安裝檔
    1. 利用`npm`來安裝`browser-sync`：npm i
    2. 開啟：npm start
2. 啟動視訊
    1. 建立 `func`: **getVideo**
    2. 利用 `navigator.mediaDevices.**getUserMedia`** 取得 User 的視訊裝置
    3. `console` MediaStream 看一下，再把回傳的 MediaStream 寫到 HTML 中的 video tag ，然後播放出來。
        
        ```jsx
        video.srcObject = localMediaStream;
        video.play();
        ```
        
        打開鏡頭就可以看到自己了0.0
        
3. 把畫面繪製到 canvas 上面
    1. 建立 `func`: **paintToCanvas**
    2. canvas 寬高：取得 video 的寬高再賦值給 canvas
    3. 使用 **`setInterval` `drawImage`** 繪製上去
        
        ```jsx
        return setInterval(() => {
        	//            畫哪裡,從哪畫, 畫到哪
          ctx.drawImage(video, 0, 0, width, height);
        }, 16);
        ```
        
4. 拍照功能
    1. 建立 `func`: **takePhoto**
    2. 先製作拍照的聲音
        
        ```jsx
        snap.currentTime = 0;
        snap.play();
        ```
        
    3. 新增點擊觸發事件
        
        ```jsx
        video.addEventListener('canplay', paintToCanvas);
        ```
        
    4. 把照片取出 base64 的字串
        
        ```jsx
        const data = canvas.toDataURL('image/jpeg');
        ```
        
    5. 呈現在畫面上
        1. 先製作一個 `a` 連結並儲存
            
            ```jsx
            const link = document.createElement('a')
            link.href = data;
            ```
            
        2. 畫面呈現
            
            ```jsx
            link.innerHTML = `<img src="${data}" alt="By takePhoto"/>`
            
            ```
            
        3. 點擊 `a` 圖片下載
            
            ```jsx
            //                  屬性
            link.setAttribute('download', 'takePhoto')
            ```
            
        4. 把照片插在節點前面 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore)
            
            ```jsx
            strip.insertBefore(link, strip.firstChild)
            
            ```
            
5. 加上紅色濾鏡 
    1. 使用 **`getImageData`** 取出 canvas 像素 `func`: paintToCanvas→ setInterval
        
        ```jsx
        let pixels = ctx.getImageData(0, 0, width, height);
        		pixels = redEffect(pixels);
        ```
        
    2. 建立 `func`: **redEffect** 帶入 pixels 的參數
        
        ```jsx
        function redEffect(pixels) {
        //                                       一組 rgba 的顏色
          for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
            pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
          }
          return pixels
        }
        ```
        
    3. 使用**`putImageData`** 改變 canvas `func`: paintToCanvas→ setInterval
        
        ```jsx
        pixels = redEffect(pixels);
        ctx.putImageData(pixels, 0, 0);
        ```
        
6. 畫面分割 : 把顏色位移
    1. 建立 `func`: **rgbSplit** 帶入 pixels 的參數
        
        ```jsx
        function rgbSplit(pixels) {
          for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i - 150] = pixels.data[i + 0]; // RED
            pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
            pixels.data[i - 500] = pixels.data[i + 2]; // BLUE
          }
          return pixels
        }
        ```
        
    2. 修改上方 pixels 值，加上效果
        
        ```jsx
        // pixels = redEffect(pixels);
           pixels = rgbSplit(pixels)
        	 ctx.globalAlpha = 0.1
        ```
        
7. 加上綠色濾鏡 
    1. 修改上方 pixels 值，加上效果 `func`: paintToCanvas→ setInterval
        
        ```jsx
        pixels = greenScreen(pixels);
        ```
        
    2. 建立 `func`: **greenScreen** 帶入 pixels 的參數
        
        ```jsx
        function greenScreen(pixels) {
          const levels = {};
          // 設定範圍
          document.querySelectorAll('.rgb input').forEach((input) => {
            levels[input.name] = input.value;
          });
        
          for (i = 0; i < pixels.data.length; i = i + 4) {
            red = pixels.data[i + 0];
            green = pixels.data[i + 1];
            blue = pixels.data[i + 2];
            alpha = pixels.data[i + 3];
        
            if (red >= levels.rmin
              && green >= levels.gmin
              && blue >= levels.bmin
              && red <= levels.rmax
              && green <= levels.gmax
              && blue <= levels.bmax) {
              // rgb 的顏色在相對中間就把 alpha 調成 0，那點就不見
              pixels.data[i + 3] = 0;
            }
          }
        
          return pixels;
        }
        ```
        
    3. 修改上方 pixels 值，加上效果
        
        ```jsx
        // pixels = redEffect(pixels);
           pixels = greenScreen(pixels);
        ```