# 21 - Geolocation

## 主題
實作一個顯示當前方位與速度的工具(手機比較能呈現)。

## 實作重點

## JS

1. 可以搭配[文件](https://developer.mozilla.org/zh-TW/docs/Web/API/Navigator/geolocation)
這個題目在手機上比較好看到效果，使用 Mac 用戶可以下載 [Xcode](https://developer.apple.com/xcode/) 去設定模擬。
2. 安裝/啟動
    1. 利用`npm`來安裝：npm i
    2. 開啟：npm start
3. 取得元素
    1. 方向：arrow, 速度：speed
4. 取得位置，console 出來看看
    
    ```jsx
    navigator.geolocation.watchPosition((data) => {
      console.log(data);
    })
    ```
    
5. 再把取到的資料賦予上去就可以了

### 額外知識

取得位置

- `getCurrenPosition` : 只回傳一個座標，適合第一次要鎖定位置然後給不同資料的情境
- `watchPosition` : 如果有變動位置就給座標，適合行進間的情境