# 24 - Sticky Nav

## 主題
實作一個置頂的 Navbar。

## 實作重點

## CSS

1.  利用 `fixed` 製作一個會黏在頂部的 `nav`  
    
    ```css
    .fixed-nav nav {
      position: fixed;
      box-shadow: 0 5px rgba(0,0,0,0.1);
    }
    ```
    
2. 在有 `fixed-nav` 時，logo 寬度從 0 改成 500px
3. 在有 `fixed-nav` 時，scale 從 0.98 改成 1

## JS

1. 取得 `nav` 元素
2. 利用 `offsetTop` 取得 `nav` 上方的 Y點 
3. 監聽 `window` 是否有滾動，即觸發 `func`: fixNav
    1. 先 `console` 看看，取到的 `nav上方點` 和整個視窗的 `scrollY` 
    2. 如果 `window.scrollY` 大於 `nav上方點` 就把 nav 加上 `fixed-nav` 的 class，沒有就移除 `remove`
        
        ```jsx
        if (window.scrollY >= topOfNav) {
          document.body.classList.add('fixed-nav');
        } else {
          document.body.classList.remove('fixed-nav');
        }
        ```
        
4. 此時在滾動觸發時會卡一個 `nav` 的高度，讓滾動時突然跑一個高度又消失，所以利用 `offsetHeight` 得到 `nav` 的高度， 在 `window.scrollY` 大於 `nav上方點` 就把 nav 高度加上去，沒有就為空值
    
    ```css
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    ```
    
5. 動態抓取高度，新增一個 `resize` 事件
    1. 監聽 `window` 是否有變更寬度，即觸發 `func`: resizeHandler
        
        ```jsx
        function resizeHandler() {
        
        }
        window.addEventListener('resize', resizeHandler);
        ```
        
    2. 抓取 `nav上方點` 
        
        ```jsx
          topOfNav = nav.offsetTop;
        ```
        

### 額外知識

1. css 樣式如果要清掉要用空值，不要直接改成 0 因為樣式還會在那裡。