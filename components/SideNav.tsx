import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Ripe',
    links: [
      {href: '/docs/qr-decoding-engine', children: 'QR Decoding Engine'},
      {href: '/docs/token-whitelist', children: 'Token Whitelist'},
      {href: '/docs/beneficiarys-wallet-system', children: `Beneficiary's Wallet System`},
      {href: '/docs/currency-conversion', children: 'Currency Conversion'},
      {href: '/docs/on-chain-payment', children: 'On-chain Payment'},
      {href: '/docs/fiat-payout', children: 'Fiat Payout'},
      {href: '/docs/aml-and-compliance', children: 'AML & Compliance'},
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li :global(a) {
            text-decoration: none;
          }
          li :global(a:hover),
          li.active :global(a) {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
