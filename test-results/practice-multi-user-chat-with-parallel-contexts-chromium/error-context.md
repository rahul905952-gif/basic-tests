# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.js >> multi-user chat with parallel contexts
- Location: tests\practice.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://example-chat-app.com/
Call log:
  - navigating to "https://example-chat-app.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in example-chat-app.com.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('multi-user chat with parallel contexts', async ({ browser }) => {
  4  |   // Create two isolated contexts for two users
  5  |   const context1 = await browser.newContext();
  6  |   const context2 = await browser.newContext();
  7  | 
  8  |   const user1 = await context1.newPage();
  9  |   const user2 = await context2.newPage();
  10 | 
  11 |   // Run both users in parallel
  12 |   await Promise.all([
  13 |     (async () => {
> 14 |       await user1.goto('https://example-chat-app.com');
     |                   ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://example-chat-app.com/
  15 |       await user1.fill('#username', 'Alice');
  16 |       await user1.click('#login');
  17 |       await user1.fill('#message', 'Hello from Alice!');
  18 |       await user1.click('#send');
  19 |       await expect(user1.locator('#chat')).toContainText('Hello from Alice!');
  20 |     })(),
  21 |     (async () => {
  22 |       await user2.goto('https://example-chat-app.com');
  23 |       await user2.fill('#username', 'Bob');
  24 |       await user2.click('#login');
  25 |       await expect(user2.locator('#chat')).toContainText('Hello from Alice!');
  26 |       await user2.fill('#message', 'Hi Alice, this is Bob!');
  27 |       await user2.click('#send');
  28 |       await expect(user2.locator('#chat')).toContainText('Hi Alice, this is Bob!');
  29 |     })()
  30 |   ]);
  31 | 
  32 |   // Close contexts
  33 |   await Promise.all([
  34 |     context1.close(),
  35 |     context2.close()
  36 |   ]);
  37 | });
  38 | 
```