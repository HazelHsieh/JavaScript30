# 22 - Follow Along Link Highlighter

## 主題
實作一個跟隨滑鼠移動的 HightLight 效果。

## 實作重點

## JS

主要使用 `getBoundingClientReact()` 可以搭配[文件](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

1. 取得所有 a 連結
2. 使用 `add` `class` 建立 HightLight
    1. 建立 HightLight 元素
    2. 使用 `classList.add` 加上 class
    3. 使用 `body.appendChlid` 加到 body
3.  a 連結綁定 `mouseenter` 事件，觸發 `func`: **highlightLink**，`console` 出來看看
    
    ```jsx
    function highlightLink() {
      console.log(this);
    }
    
    triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
    ```
    
4. 使用 `getBoundingClientReact` 找到元素的大小
    
    ```jsx
    const linkCoords = this.getBoundingClientReact()
    console.log(linkCoords);
    ```
    
5. 把找到的元素取寬高出來賦予至 `highlight` 上
    
    ```jsx
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    ```
    
6. 使用 `transform`和 `translate`, `window.top/left` 賦予`highlight` 位置
    
    ```jsx
    highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`
    ```
    
7. 此時會發現視窗移動後`getBoundingClientReact` 就找不到元素了，因為是取得視窗相對距離，所以再加上視窗的絕對距離 `window.scrollY` 和 `window.scrollX` ，有點類似第 16 天的題目。
    
    ```
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    }
    ```
    
8. 把 6, 7 的參數改一下
    
    ```jsx
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    ```
    
