"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu({ active }: { active?: "home" | "about" | "products" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button className={`mobile-menu-toggle${open ? " is-open" : ""}`} type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>
        <span /><span /><span />
      </button>
      <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label="Navegação principal">
        <Link href="/" aria-current={active === "home" ? "page" : undefined} onClick={close}>Início</Link>
        <Link href="/sobre" aria-current={active === "about" ? "page" : undefined} onClick={close}>Sobre</Link>
        <Link href="/produtos" aria-current={active === "products" ? "page" : undefined} onClick={close}>Produtos</Link>
        <Link href="/#como-funciona" onClick={close}>Como funciona</Link>
        <Link href="/#duvidas" onClick={close}>Dúvidas</Link>
        <a href="#contato" onClick={close}>Contato</a>
      </nav>
    </>
  );
}
