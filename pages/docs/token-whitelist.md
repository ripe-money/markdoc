---
title: Token Whitelist
---

# {% $markdoc.frontmatter.title %}

Ripe maintains a whitelist of accepted stablecoins to ensure better control over on-chain actions and compliance with local regulations. The availability of stablecoins depends on which blockchain and in which country the settlement is occurring.

**Currently Supported Stablecoins:**

* **Solana:**
  * USDC
  * USDT

**Local Currency-Pegged Stablecoins:**

Ripe also supports local currency-pegged stablecoins in their respective countries alongside USD-based stablecoins:

* **Philippines:**
  * PHPC
* **Singapore:**
  * XSGD

**Auto-swapping:**

We support automatic token swapping, but only for tokens with deep liquidity and widespread adoption. For example, users can pay in SOL, and our system will automatically swap it on-chain to a supported stablecoin in the user's region.