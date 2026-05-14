import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/organisms'

const FEATURES = [
  { icon: '🌍', name: 'Global Suppliers', desc: 'Discover verified suppliers from Africa, Asia, Europe and beyond — all in one social feed.' },
  { icon: '💬', name: 'Real-Time Negotiation', desc: 'Chat directly with suppliers, negotiate prices, and close deals without leaving the platform.' },
  { icon: '🔒', name: 'Stellar Escrow', desc: 'Funds locked in a Soroban smart contract until delivery is confirmed. Zero counterparty risk.' },
  { icon: '📦', name: 'Shipment Tracking', desc: 'Track your orders from warehouse to doorstep with live status updates.' },
  { icon: '⭐', name: 'Trust Scores', desc: 'On-chain reputation scores for every supplier and importer. Know who you\'re dealing with.' },
  { icon: '⚡', name: 'Instant Settlement', desc: 'Payments settle on Stellar in seconds. No wire transfers, no waiting days for funds to clear.' },
]

const STEPS = [
  { num: '01', title: 'Connect & Browse', desc: 'Connect your Stellar wallet and explore the social feed of global product listings.' },
  { num: '02', title: 'Negotiate in Chat', desc: 'Message suppliers directly, agree on price, quantity and shipping terms.' },
  { num: '03', title: 'Lock Funds in Escrow', desc: 'Sign the escrow transaction via Freighter. Funds are held on-chain until delivery.' },
  { num: '04', title: 'Receive & Release', desc: 'Confirm delivery to release payment to the supplier. Dispute if there\'s a problem.' },
]

const STATS = [
  { number: '120+', label: 'Countries' },
  { number: '8K+',  label: 'Suppliers' },
  { number: '$0',   label: 'Escrow Fees' },
  { number: '100%', label: 'On-Chain' },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OyaShip — Global Social Commerce on Stellar</title>
        <meta name="description" content="OyaShip connects importers with global suppliers. Negotiate in real-time, pay safely through Stellar escrow smart contracts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pt-28 pb-24 text-center bg-gradient-to-b from-white via-emerald-50 to-white dark:from-gray-950 dark:via-emerald-950/20 dark:to-gray-950">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-emerald-400/10 blur-3xl" />

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            🌍 Cross-Border Commerce on Stellar
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white max-w-4xl mx-auto mb-6">
            Import Globally.{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Pay Trustlessly.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            OyaShip connects importers with verified global suppliers. Discover products, negotiate in real-time chat, and pay safely through Soroban smart contract escrow on Stellar.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/marketplace" className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-0.5">
              Browse Suppliers →
            </Link>
            <Link href="/sell" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5">
              List Your Products
            </Link>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 dark:divide-gray-800">
            {STATS.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">{s.number}</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Features ── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Features</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Built for cross-border trade</h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
            Every tool an importer needs — from supplier discovery to escrow settlement — in one social platform.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.name} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-600 hover:-translate-y-1 transition-all duration-200">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{f.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <div className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">How It Works</span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Import in four steps</h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              From discovery to doorstep — every step is transparent, on-chain, and protected by escrow.
            </p>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-100 dark:to-emerald-900" />
              {STEPS.map((s) => (
                <div key={s.num} className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white text-xl font-extrabold shadow-lg shadow-emerald-500/30 mb-5 relative z-10">{s.num}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Supplier CTA ── */}
        <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">Are you a supplier?</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                List your products and reach importers worldwide. Receive payments instantly in Stellar tokens — no intermediaries, no chargebacks.
              </p>
            </div>
            <Link href="/sell" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap">
              Start Selling →
            </Link>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-24 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
          <h2 className="relative text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Ready to trade globally?</h2>
          <p className="relative text-lg text-emerald-100 max-w-md mx-auto mb-10 leading-relaxed">
            Connect your Stellar wallet and start importing from verified suppliers in minutes. No banks. No middlemen.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <Link href="/marketplace" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all">
              Get Started →
            </Link>
            <a href="https://github.com/OyaShip/frontend" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl border border-white/40 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all">
              View on GitHub
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 pt-14 pb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <span className="text-xl font-extrabold text-gray-900 dark:text-white block mb-3">OyaShip</span>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[240px]">
                Cross-border social commerce secured by Stellar &amp; Soroban smart contracts.
              </p>
            </div>
            {[
              { title: 'Platform', links: [{ label: 'Marketplace', href: '/marketplace' }, { label: 'Dashboard', href: '/dashboard' }, { label: 'Messages', href: '/messages' }] },
              { title: 'Developers', links: [{ label: 'GitHub', href: 'https://github.com/OyaShip', external: true }, { label: 'Smart Contracts', href: 'https://github.com/OyaShip/smartcontract', external: true }, { label: 'Backend API', href: 'https://github.com/OyaShip/backend', external: true }] },
              { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Issues', href: 'https://github.com/OyaShip/frontend/issues', external: true }] },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {'external' in l && l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{l.label}</a>
                      ) : (
                        <Link href={l.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{l.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap justify-between items-center gap-3">
            <span className="text-xs text-gray-400 dark:text-gray-500">© 2026 OyaShip. MIT License.</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">⭐ Powered by Stellar &amp; Soroban</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
