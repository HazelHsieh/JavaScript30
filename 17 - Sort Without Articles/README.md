# 17 - Sort Without Articles

## 主題
利用編排文章排序來複習陣列方法`sort`, `map`, `join`, `replace`, `trim` 搭配正則的使用。

## 實作重點

## JS

1. 使用 `sort` 排序
2. 目標排除 a, the, an，建立 `func`: **strip**
    1. 用 `replace` 搭配正則去除字母
    2. `trim` 出空格
3. 畫面呈現
    1. 先抓到元素 `bands`
    2. 用 `map` 把每個字加上 li
    3. 把每個字`join` 進去