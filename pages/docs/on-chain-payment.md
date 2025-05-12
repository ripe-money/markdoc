---
title: On-chain Payment
---

# {% $markdoc.frontmatter.title %}

Ripe processes on-chain payments received through our dApp:

1. We calculate the payment amount by converting the fiat amount to the selected stablecoin using  [conversion rate](currency-conversion).
2. We add a 2% fee to the stablecoin amount
3. Once payment receipt is verified on-chain, we proceed to [payout](fiat-payout)

**Chain Specific Processing:**

* **Solana:** Every on-chain transaction created by Ripe includes a memo instruction encoding necessary fiat information (total amount and fee amount). When a beneficiary wallet receives a transaction with valid memo text, Ripe triggers a [fiat payout](fiat-payout).
* **EVM:** Ripe uses smart contracts that handle transactions and emit events containing necessary fiat information (total amount and fee amount). When our backend receives these event emissions via webhook, Ripe triggers a [fiat payout](fiat-payout).