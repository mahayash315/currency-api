/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const ticker = /* GraphQL */ `
  query Ticker($amount: Float!, $symbol: Currency!, $date: AWSDate) {
    ticker(amount: $amount, symbol: $symbol, date: $date) {
      amount
      symbol
      date
    }
  }
`;
