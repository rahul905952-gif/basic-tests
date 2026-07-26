# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: debug.spec.js >> debugging with playwright
- Location: tests\debug.spec.js:3:1

# Error details

```
Error: locator.click: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '..login-button' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6136:25)
    at InjectedScript._queryEngineAll (<anonymous>:6804:49)
    at InjectedScript.querySelectorAll (<anonymous>:6791:30)
    at eval (eval at evaluate (:303:30), <anonymous>:2:39)
    at UtilityScript.evaluate (<anonymous>:305:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('..login-button')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: problem_user
      - textbox "Password" [active] [ref=e13]: secret_sauce
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```