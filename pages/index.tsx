import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/organisms'

const FEATURES = [
  { icon: '🌍', name: 'Global Suppliers',       desc: 'Discover verified suppliers from Africa, Asia, Europe and beyond — all in one social feed.' },
  { icon: '💬', name: 'Real-Time Negotiation',  desc: 'Chat directly with suppliers, negotiate prices, and close deals without leaving the platform.' },
  { icon: '🔒', name: 'Stellar Escrow',         desc: 'Funds locked in a Soroban smart contract until delivery is confirmed. Zero counterparty risk.' },
  { icon: '📦', name: 'Shipment Tracking',      desc: 'Track your orders from warehouse to doorstep with live status updates.' },
  { icon: '⭐', name: 'Trust Scores',           desc: 'On-chain reputation scores for every supplier and importer. Know who you\'re dealing with.' },
  { icon: '⚡', name: 'Instant Settlement',     desc: 'Payments settle on Stellar in seconds. No wire transfers, no waiting days for funds to clear.' },
]

const STEPS = [
  { num: '01', title: 'Connect & Browse',      desc: 'Connect your Stellar wallet and explore the social feed of global product listings.' },
  { num: '02', title: 'Negotiate in Chat',     desc: 'Message suppliers directly, agree on price, quantity and shipping terms.' },
  { num: '03', title: 'Lock Funds in Escrow', desc: 'Sign the escrow transaction via Freighter. Funds are held on-chain until delivery.' },
  { num: '04', title: 'Receive & Release',    desc: 'Confirm delivery to release payment to the supplier. Dispute if there\'s a problem.' },
]

const STATS = [
  { number: '120+', label: 'Countries'    },
  { number: '8K+',  label: 'Suppliers'   },
  { number: '$0',   label: 'Escrow Fees' },
  { number: '100%', label: 'On-Chain'    },
]

const TESTIMONIALS = [
  { name: 'Amara T.', role: 'Importer, Lagos', text: 'OyaShip removed all the anxiety from importing. The escrow held my funds safely until the goods arrived. Never going back to bank transfers.' },
  { name: 'Wei L.',   role: 'Supplier, Shenzhen', text: 'I get paid in XLM instantly once the buyer confirms delivery. Settlement that used to take 10 days now takes 10 seconds.' },
  { name: 'Fatou D.', role: 'Importer, Dakar', text: 'Found a new fabric supplier through the social feed, negotiated price in the chat, and closed the deal in one afternoon. Incredible.' },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OyaShip — Global Social Commerce on Stellar</title>
        <meta name="description" content="OyaShip connects importers with global suppliers. Negotiate in real-time, pay safely through Stellar escrow smart contracts." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 text-center bg-gradient-to-b from-white via-emerald-50 to-white dark:from-gray-950 dark:via-emerald-950/20 dark:to-gray-950">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-emerald-400/10 blur-3xl" />

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-5 sm:mb-6">
            🌍 Cross-Border Commerce on Stellar
          </span>

          <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white max-w-4xl mx-auto mb-4 sm:mb-6">
            Import Globally.{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Pay Trustlessly.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            OyaShip connects importers with verified global suppliers. Discover products, negotiate in real-time chat, and pay safely through Soroban smart contract escrow on Stellar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link href="/marketplace" className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-0.5 min-h-[48px] text-sm sm:text-base">
              Browse Suppliers →
            </Link>
            <Link href="/sell" className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5 min-h-[48px] text-sm sm:text-base">
              List Your Products
            </Link>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`py-6 sm:py-8 px-4 sm:px-6 text-center ${i < 2 ? 'border-b md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r' : ''} md:border-r last:border-r-0 border-gray-200 dark:border-gray-800`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">{s.number}</div>
                <div className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Features ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Features</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Built for cross-border trade</h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
            Every tool an importer needs — from supplier discovery to escrow settlement — in one social platform.
          </p>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES.map((f) => (
              <div key={f.name} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-600 hover:-translate-y-1 transition-all duration-200">
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{f.icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 text-sm sm:text-base">{f.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <div className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">How It Works</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Import in four steps</h2>
            <p className="mt-3 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              From discovery to doorstep — every step is transparent, on-chain, and protected by escrow.
            </p>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
              {/* connecting line — lg only */}
              <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-100 dark:to-emerald-900" />

              {STEPS.map((s) => (
                <div key={s.num} className="flex flex-col sm:items-center sm:text-center gap-3 sm:gap-0 relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 text-white text-lg sm:text-xl font-extrabold shadow-lg shadow-emerald-500/30 sm:mb-5 relative z-10 shrink-0">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Testimonials</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Trusted by importers worldwide</h2>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Supplier CTA ── */}
        <div className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">Are you a supplier?</h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                List your products and reach importers worldwide. Receive payments instantly in Stellar tokens — no intermediaries, no chargebacks.
              </p>
            </div>
            <Link href="/sell" className="shrink-0 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-lg transition-all hover:-translate-y-0.5 min-h-[48px] text-sm sm:text-base">
              Start Selling →
            </Link>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
          <h2 className="relative text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">Ready to trade globally?</h2>
          <p className="relative text-sm sm:text-lg text-emerald-100 max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Connect your Stellar wallet and start importing from verified suppliers in minutes. No banks. No middlemen.
          </p>
          <div className="relative flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link href="/marketplace" className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all min-h-[48px] text-sm sm:text-base">
              Get Started →
            </Link>
            <a href="https://github.com/OyaShip/frontend" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl border border-white/40 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all min-h-[48px] text-sm sm:text-base">
              View on GitHub
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 sm:px-6 pt-10 sm:pt-14 pb-6 sm:pb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <span className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white block mb-2 sm:mb-3">
                🌍 OyaShip
              </span>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[260px]">
                Cross-border social commerce secured by Stellar &amp; Soroban smart contracts.
              </p>
            </div>

            {[
              {
                title: 'Platform',
                links: [
                  { label: 'Marketplace', href: '/marketplace' },
                  { label: 'Dashboard',   href: '/dashboard'   },
                  { label: 'Messages',    href: '/messages'    },
                ],
              },
              {
                title: 'Developers',
                links: [
                  { label: 'GitHub',          href: 'https://github.com/OyaShip',                      external: true },
                  { label: 'Smart Contracts', href: 'https://github.com/OyaShip/smartcontract',         external: true },
                  { label: 'Backend API',     href: 'https://github.com/OyaShip/backend',               external: true },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'About',  href: '/about'                                                       },
                  { label: 'Issues', href: 'https://github.com/OyaShip/frontend/issues', external: true },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3 sm:mb-4">{col.title}</div>
                <ul className="space-y-2 sm:space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {'external' in l && l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="text-xs text-gray-400 dark:text-gray-500">© 2026 OyaShip. MIT License.</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">⭐ Powered by Stellar &amp; Soroban</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
