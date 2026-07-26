# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: browserContext.spec.js >> download
- Location: tests\browserContext.spec.js:47:1

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\USER\AppData\Local\ms-playwright\webkit-2311\Playwright.exe --inspector-pipe --disable-accelerated-compositing --no-startup-window
<launched> pid=16132
Call log:
  - <launching> C:\Users\USER\AppData\Local\ms-playwright\webkit-2311\Playwright.exe --inspector-pipe --disable-accelerated-compositing --no-startup-window
  - <launched> pid=16132
  - [pid=16132] <gracefully close start>
  - [pid=16132] <kill>
  - [pid=16132] <will force kill>
  - [pid=16132] taskkill stderr: ERROR: The process "16132" not found.
  - [pid=16132] <process did exit: exitCode=3236495362, signal=null>
  - [pid=16132] starting temporary directories cleanup
  - [pid=16132] finished temporary directories cleanup
  - [pid=16132] <gracefully close end>

```

# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e14]:
    - generic [ref=e17]:
      - img [ref=e20]
      - generic [ref=e24]: Explore the things you love.
    - generic [ref=e34]:
      - generic [ref=e41]: Log in to Facebook
      - generic [ref=e46]:
        - generic [ref=e50]:
          - textbox "Email address or mobile number" [active] [ref=e51]
          - generic: Email address or mobile number
        - generic [ref=e55]:
          - textbox "Password" [ref=e56]
          - generic: Password
        - button "Log in" [ref=e59] [cursor=pointer]:
          - generic [ref=e62]: Log in
        - link "Forgotten password?" [ref=e65] [cursor=pointer]:
          - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzg1MDQ5NDc0fQ%3D%3D&ars=facebook_login
          - generic [ref=e68]: Forgotten password?
        - link "Create new account" [ref=e71] [cursor=pointer]:
          - /url: /reg/?entry_point=login&next=
          - generic [ref=e74]: Create new account
        - img "Meta logo" [ref=e76]
  - separator [ref=e84]
  - main [ref=e90]:
    - separator [ref=e92]
    - generic [ref=e97]:
      - generic [ref=e99]:
        - generic [ref=e101]: English (UK)
        - link "हिन्दी" [ref=e104] [cursor=pointer]:
          - /url: "#"
        - link "اردو" [ref=e107] [cursor=pointer]:
          - /url: "#"
        - link "தமிழ்" [ref=e110] [cursor=pointer]:
          - /url: "#"
        - link "বাংলা" [ref=e113] [cursor=pointer]:
          - /url: "#"
        - link "मराठी" [ref=e116] [cursor=pointer]:
          - /url: "#"
        - link "తెలుగు" [ref=e119] [cursor=pointer]:
          - /url: "#"
        - link "More languages…" [ref=e122] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e125]:
        - link "Sign up" [ref=e128] [cursor=pointer]:
          - /url: https://www.facebook.com/reg/
        - link "Log in" [ref=e131] [cursor=pointer]:
          - /url: https://www.facebook.com/login/
        - link "Messenger" [ref=e134] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Facebook Lite" [ref=e137] [cursor=pointer]:
          - /url: https://www.facebook.com/lite/
        - link "Video" [ref=e140] [cursor=pointer]:
          - /url: https://www.facebook.com/watch/
        - link "Meta Pay" [ref=e143] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Meta Store" [ref=e146] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Meta Quest" [ref=e149] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Ray-Ban Meta" [ref=e152] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Meta AI" [ref=e155] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Instagram" [ref=e158] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Threads" [ref=e161] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUAehY2C9eXgr-jjsRrcMhJp6bKNY9ss4-6c6eyR5yBfWnVRw6ZRFwvNOE2-e_skhhZygEzp1SnvfrYSX55oTXA6WdbSRZ-5tiW6T5HQ9jK9UEcHKugyHvCSV3G-Kfa8y5JyfV0TK4umG0hukVjITSOOF7bY5QNrzsiyRicG4Kw
        - link "Privacy Policy" [ref=e164] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
        - link "Privacy Centre" [ref=e167] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
        - link "About" [ref=e170] [cursor=pointer]:
          - /url: https://www.facebook.com/about/
        - link "Create ad" [ref=e173] [cursor=pointer]:
          - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
        - link "Create Page" [ref=e176] [cursor=pointer]:
          - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
        - link "Developers" [ref=e179] [cursor=pointer]:
          - /url: https://developers.facebook.com/?ref=pf
        - link "Careers" [ref=e182] [cursor=pointer]:
          - /url: https://www.facebook.com/careers/?ref=pf
        - link "Cookies" [ref=e185] [cursor=pointer]:
          - /url: https://www.facebook.com/policies/cookies/
        - link "AdChoices" [ref=e188] [cursor=pointer]:
          - /url: https://www.facebook.com/help/568137493302217
        - link "Terms" [ref=e191] [cursor=pointer]:
          - /url: https://www.facebook.com/policies?ref=pf
        - link "Help" [ref=e194] [cursor=pointer]:
          - /url: https://www.facebook.com/help/?ref=pf
        - link "Contact uploading and non-users" [ref=e197] [cursor=pointer]:
          - /url: https://www.facebook.com/help/637205020878504
      - generic [ref=e200]: Meta © 2026
```