# 03 - CSS Variables

## 主題

利用 JS 去改變 CSS 變數的值

# 實作重點

### CSS

偽類：`:root` 表示 `<html>` 元素，裡面可以存放 `Css` 的變數，創造時要加 `--`，使用時要加 `var`。

```css
:root {
  --base: #ffc600;
}
img {
  background: var(--base);
}
```

## JS

1. 類陣列(NodeList) : 使用 **`querySelectorAll`** 得出來的東西， `console` 去看它會很像陣列，但是仔細看它的 `Prototype` 裡面只有一些方法可以使用，這個主題使用 `forEach` 。
2. input 效果：使用 `change` 可以更換值， 想要動態效果使用 `mousemove`。
3. 資料改動畫面：
    1. 變數修改值：因為 `spacing` 、 `blur` 後面要加 px，所以先在 `input` 綁上 `data-(自定義)`  的值，之後在 `js` 裡加上去。
        
        ```jsx
        //HTML 設定：
        data-sizing="px"
        
        //JS 使用：
        this.dataset.sizing
        ```
        
    2.  使用 `setProperty` 去呼叫，前面放屬性名稱，後面放值
        
        <MDN語法>：
        
        ```jsx
        //                 CSS 屬性    新的属性值 可以放 "important" CSS 優先级
        style.setProperty(propertyName, value, priority);
        ```
        

## 額外知識

1. `:root`  有三種呈現的方式，分別是 `document.querySelector('html')`、`document.querySelector(':root')`、`document.documentElement` 。