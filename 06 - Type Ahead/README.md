# 06 - Type Ahead

## 主題
利用 `Fetch API`、非同步載入的方式，並配合正規表達式處理字串，實現使用者輸入的城市名稱時動態地查找相對應的資料。

## 實作重點

## JS

1. 接資料
    1. 使用 [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) 取得 json 資料 // 跟 [axios](https://github.com/axios/axios) 寫法很像
        
        ```jsx
        fetch(endpoint)
          .then(blob => blob.json())
        ```
        
    2. 先創一個變數預設是陣列，再把接收的資料 `push` 進去裡面
        
        ```jsx
        const cities = [];
          .then .then(data => cities.push(...data));// (...data) ES6 淺拷貝
        ```
        
2. 先做一個 pure function 專門來找查找字與城市有沒有關聯，之後再調用它
3. 做一個 function 處理，字串轉換數字，這個正規表達式用於在數字的千位上插入逗號，以增加數字的可讀性。例如，將 **`1234567`** 轉換為 **`1,234,567`**。
4. `input` 輸入的資訊，顯示資料
    1. 綁定事件 `change` 、 `keyup` 
    2. 觸發時跑指定 function
    3. 調用 pure function
    4. 渲染到 `html` ：使用 `map` 跑 place，有相同的地區或城市時，用 `replace` 去替換值
    5. 最後在用`樣板字串` 把字呈現
    6. 用 `join` 去連接每個資訊

### 額外知識

- 正則表達式學習資訊
    - MDN : https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_expressions
    - 正則101：https://regex101.com/
    - 圖解正則： [https://regexper.com/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1hCSU1PZGd4REQybHVRa09TLTdPbkJ4QVpRZ3xBQ3Jtc0tuNnM5dmp0T2lINHY3VG5CckRZUVFVc2FXQjZvNHZzUkdYZEV0SzJHSFZsQWFodTdDZ1FKWUlaR0FSQ0RLdHZFdlpzc3FfSEZ5bUdpZVRQd3k1d2JFdExfWEp1c1F1ODloQXBfRVNCSVZib0lrOXlpTQ&q=https%3A%2F%2Fregexper.com%2F&v=_TbG2iuN9kM)
    - 正則電子書： [https://zhuanlan.zhihu.com/p/27653434](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGNfNmhaUHJ3aWl3WkVNSFhoaFhyaDY3amJPd3xBQ3Jtc0tsU2RhTjZUM0JkY19XV2dYaGpVSko4Nnl4RzRhZHFLamxvT0xaTHgyYWZDZXBrVWdFTkl5amhnRjJHRnVZbk1mTjEwbXBUd0tlcktuZHdrWjc1elBKeWo3MHIwdVlvSHMxcFNXc1JQUVNsMlVkMzVXdw&q=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F27653434&v=_TbG2iuN9kM)