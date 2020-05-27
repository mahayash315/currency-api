# currency-api

A GraphQL foreign currency api backed by [Exchange Rates Api](https://exchangeratesapi.io/).

```graphql
query {
  ticker(amount: 100.0, symbol: JPY) {
    amount
    symbol
    date
    to(symbol: AUD, date: "2020-03-20") {
      amount
      symbol
      date
      to(symbol: JPY, date: "2020-05-16") {
        amount
        symbol
        date
      }
    }
  }
}
```

```json
{
  "data": {
    "ticker": {
      "amount": 100,
      "symbol": "JPY",
      "date": null,
      "to": {
        "amount": 1.53974825,
        "symbol": "AUD",
        "date": "2020-03-20",
        "to": {
          "amount": 105.85368361953189,
          "symbol": "JPY",
          "date": "2020-05-15"
        }
      }
    }
  }
}
```