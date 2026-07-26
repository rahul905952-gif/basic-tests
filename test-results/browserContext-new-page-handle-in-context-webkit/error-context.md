# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: browserContext.spec.js >> new page handle in context
- Location: tests\browserContext.spec.js:28:1

# Error details

```
Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e26]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - button "Add files and tools" [ref=e35] [cursor=pointer]:
          - img [ref=e37]
        - combobox "Search" [active] [ref=e40]
        - generic [ref=e41]:
          - generic [ref=e42]:
            - button "Search by voice" [ref=e45] [cursor=pointer]:
              - img [ref=e46]
            - button "Search by image" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
          - link "AI Mode" [ref=e53] [cursor=pointer]:
            - generic [ref=e55]:
              - img [ref=e57]
              - generic [ref=e64]: AI Mode
      - generic [ref=e66]:
        - button "Google Search" [ref=e67] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e68] [cursor=pointer]
  - generic [ref=e71]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e72] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCCk
    - link "বাংলা" [ref=e73] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCCo
    - link "తెలుగు" [ref=e74] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCCs
    - link "मराठी" [ref=e75] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCCw
    - link "தமிழ்" [ref=e76] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCC0
    - link "ગુજરાતી" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCC4
    - link "ಕನ್ನಡ" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCC8
    - link "മലയാളം" [ref=e79] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCDA
    - link "ਪੰਜਾਬੀ" [ref=e80] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_6EalilUR28A2zgNz35HblZrmsAo%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjBmaW2zPCVAxX6R2cHHdG5KG8Q2ZgBCDE
  - contentinfo [ref=e82]:
    - generic [ref=e83]: India
    - generic [ref=e84]:
      - generic [ref=e85]:
        - link "Advertising" [ref=e86] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e87] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e88] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e89]:
        - link "Privacy" [ref=e90] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e91] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e95] [cursor=pointer]:
          - generic [ref=e96]: Settings
```