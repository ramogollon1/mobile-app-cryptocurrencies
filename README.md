# CryptoExchangeApp

CryptoExchangeApp is an application that allows users to buy and sell cryptocurrency. Users can view current cryptocurrency rates, select the amount they wish to buy or sell, and execute the trade.

## Requirements

To run the application, you will need to have installed:

- Node.js (v12.0.0 o superior)
- Yarn (v1.0.0 o superior)
- React Native CLI (v2.0.1 o superior)
- Android SDK / Xcode

## Set up

Follow these steps to set up the app:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/ramogollon1/mobile-app-cryptocurrencies.git
```

Install the application dependencies.

```bash
cd CryptoExchangeApp
yarn install
```

Set up the Android or iOS runtime by following the [official React Native instructions](https://reactnative.dev/docs/environment-setup).

### To run the application:

- Android:

```bash
yarn android
```

- iOS:

```bash
cd ios && pod install && cd ..
yarn ios
```

### Tests

To run the unit tests, run:

```bash
yarn test
```

To view the test coverage report, run:

```bash
yarn test -- --coverage
```
