---
title: Ripe Documentation
description: Getting started with Ripe
---

# Technical Documentation for Ripe

Ripe connects crypto wallets to existing QR payment rails in Asia.

* Our [**QR Decoding Engine** ](docs/qr-decoding-engine)scans and interprets payment QR codes (both EMV standard and payment links), extracting the beneficiary's payment information.
* Users can make payments using any cryptocurrency from our [**Token Whitelist**](docs/token-whitelist), which includes mostly stablecoins and tokens with deep liquidity pools.
* When a payment is initiated, funds are directed to a unique crypto wallet created by our [**Beneficiary's Wallet System**](docs/beneficiarys-wallet-system) specifically for that merchant or recipient.
* Our [**Currency Conversion** ](docs/currency-conversion)then handles the exchange between cryptocurrencies and fiat currencies, selecting the optimal conversion path based on regional factors and available rates.
* The [**On-chain Payment** ](docs/on-chain-payment)processor verifies the blockchain transaction, encodes payment details, and triggers the subsequent fiat transfer.
* The [**Fiat Payout** ](docs/fiat-payout)system routes the converted funds through local payment networks to deliver local currency to the beneficiary's bank account or e-wallet.
* Throughout this process, our [**AML & Compliance**](docs/aml-and-compliance) framework monitors transactions, screens wallets, and ensures all regulatory requirements are met.