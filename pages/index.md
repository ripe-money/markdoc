---
title: Ripe Documentation
description: Getting started with Ripe
---

# Technical Documentation for Ripe

Ripe connects crypto wallets to existing QR payment rails in Asia.

* Our [**QR Decoding Engine** ](standalone-components/qr-decoding-engine.md)scans and interprets payment QR codes (both EMV standard and payment links), extracting the beneficiary's payment information.
* Users can make payments using any cryptocurrency from our [**Token Whitelist**](standalone-components/token-whitelist.md), which includes mostly stablecoins and tokens with deep liquidity pools.
* When a payment is initiated, funds are directed to a unique crypto wallet created by our [**Beneficiary's Wallet System**](standalone-components/beneficiarys-wallet-system.md) specifically for that merchant or recipient.
* Our [**Currency Conversion** ](standalone-components/currency-conversion.md)then handles the exchange between cryptocurrencies and fiat currencies, selecting the optimal conversion path based on regional factors and available rates.
* The [**On-chain Payment** ](standalone-components/on-chain-payment.md)processor verifies the blockchain transaction, encodes payment details, and triggers the subsequent fiat transfer.
* The [**Fiat Payout** ](standalone-components/fiat-payout.md)system routes the converted funds through local payment networks to deliver local currency to the beneficiary's bank account or e-wallet.
* Throughout this process, our [**AML & Compliance**](standalone-components/aml-and-compliance.md) framework monitors transactions, screens wallets, and ensures all regulatory requirements are met.