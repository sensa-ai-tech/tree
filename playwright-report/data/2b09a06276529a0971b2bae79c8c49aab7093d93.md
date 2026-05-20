# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - img [ref=e6]
      - heading "登入" [level=1] [ref=e9]
    - generic [ref=e10]:
      - generic [ref=e11]:
        - generic [ref=e12]:
          - generic [ref=e13]: Email
          - textbox "Email" [ref=e14]:
            - /placeholder: you@example.com
        - generic [ref=e15]:
          - generic [ref=e16]: 密碼
          - textbox "密碼" [ref=e17]:
            - /placeholder: 請輸入密碼
        - button "登入" [ref=e18]
      - paragraph [ref=e19]:
        - text: 還沒有帳號？
        - link "立即註冊" [ref=e20] [cursor=pointer]:
          - /url: /register
  - button "Open Next.js Dev Tools" [ref=e26] [cursor=pointer]:
    - img [ref=e27]
  - alert [ref=e30]
```