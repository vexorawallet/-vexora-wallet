
import React from "react";
import { createRoot } from "react-dom/client";
import {
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  Plus,
  Settings
} from "lucide-react";
import " ./style.css";

function App() {
  return (
    <main className="app">
      <header>
        <h2>VEXORA<span>®</span></h2>
        <button><Settings /></button>
      </header>

      <section className="welcome">
        <p>WELCOME TO VEXORA</p>
        <h1>Your crypto.<br />Your control.</h1>
        <p>One wallet. Your Web3 world.</p>
      </section>

      <section className="balance">
        <p>Total Portfolio Balance</p>
        <h1>$0.00</h1>
        <span>Connect your wallet to get started</span>
      </section>

      <section className="actions">
        <button><Plus /> Create Wallet</button>
        <button><ArrowDownLeft /> Receive</button>
        <button><ArrowUpRight /> Send</button>
      </section>

      <section className="features">
        <h3>Your Web3 Wallet</h3>
        <article><Wallet /> Assets <span>Coming soon</span></article>
        <article><Globe /> Explore DApps <span>Coming soon</span></article>
        <article><ShieldCheck /> Security <span>Protected</span></article>
      </section>

      <footer>© 2026 VEXORA. Built for Web3.</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
