# 05 - Flex Panel Gallery

## 主題
實作一個圖片展開的動畫

## 實作重點

### CSS

先用 css 把畫面調整出來

調整圖片：`flex` 、flex 佔比為 1

文字置中： `flex` 、 `justify-content` 、 `align-items` 、 `flex-direction`

用到滿多 `flex` 的技巧，不太熟悉可以參考 [青蛙遊戲](https://flexboxfroggy.com/)

## JS

- 第一段動畫
    - 配合 JS 的 class and css 圖片點擊放大：
        - .panel.open : flex 佔比為 5
    - 圖片點擊放大：
        - 使用 **`toggle`** 來切換 class `open`。
- 第二段動畫
    - 配合 JS 的 class and css 圖片點擊文字出現：
        - 利用 `transform: translate` 和 add class 把動畫做出來
    - 上下文字出現：
        - 因為 `e` 會觸發多個事件，當事件有 `flex` 時，才觸發 **`toggle`** 來切換 `open-active`