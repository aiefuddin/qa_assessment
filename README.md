
# Mobile Automation Assessment

## Section 1 — Mobile UI Automation
### Overview

  

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

  

### Tech Stack

  

- JavaScript

- WebdriverIO

- Appium

- Mocha

  

---

  

### Prerequisites

  

- Node.js

- Java JDK

- Android SDK

- Appium

- Android device or emulator

  

Verify your device:

  

```bash

adb  devices

```

  

---

  

### Installation

  

```bash

git  clone  https://github.com/aiefuddin/qa_assessment

cd  qa_assessment

npm  install

```

  

---

  

### Run Test

  

```bash

npm  run  wdio

```

  

---

  

### Project Structure

  

```

test/

├── data/

├── pages/

└── specs/

```

  

-  **data** – Test data

-  **pages** – Page Object Model

-  **specs** – Test scenarios

  

---

  





