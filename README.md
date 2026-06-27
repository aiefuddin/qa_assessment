# Mobile Automation Assessment

## Overview

This project automates the end-to-end purchase flow of the Sauce Labs My Demo App using WebdriverIO, Appium, and the Page Object Model (POM).

### Test Flow

- Launch App
- Login with a valid user
- Open the first product
- Add product to cart
- Complete shipping information
- Complete payment information
- Place order
- Verify successful checkout

---

## Tech Stack

- JavaScript
- WebdriverIO
- Appium
- Mocha

---

## Prerequisites

- Node.js
- Java JDK
- Android SDK
- Appium
- Android device or emulator

Verify your device:

```bash
adb devices
```

---

## Installation

```bash
git clone https://github.com/aiefuddin/qa_assessment
cd qa_assessment
npm install
```

---

## Run Test

```bash
npm run wdio
```

---

## Project Structure

```
test/
├── data/
├── pages/
└── specs/
```

- **data** – Test data
- **pages** – Page Object Model
- **specs** – Test scenarios

---

## Design Decisions

- Implemented using the **Page Object Model (POM)** for maintainability.
- Test data is separated from page logic.
- Used **Accessibility ID** and **Resource ID** wherever possible for more stable selectors.
- Used explicit waits and `UiScrollable` to improve test stability. Tested on small and big devices.

---

## Trade-off

The assessment requires selecting the **first visible product**. Since product images share the same resource ID, the test retrieves the matching elements and opens the first visible item.

## API Test Execution

### Tool
- Postman
- Newman

### Endpoint
https://postman-echo.com/post

### Run Collection

```bash
newman run OrderAPITestAssessment.postman_collection.json
```

### Files

- api-test-cases.md
- OrderAPITestAssessment.postman_collection.json

### Notes

This assessment uses the Postman Echo API as per instructiosn. Expected production behaviors such as HTTP 400 and HTTP 401 are documented in the written test cases