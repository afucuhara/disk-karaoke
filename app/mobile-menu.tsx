"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export function MobileMenu({ active }: { active?: "home" | "about" | "products" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  const links = (
    <>
      <Link href="/" aria-current={active === "home" ? "page" : undefined} onClick={close}>Início</Link>
      <Link href="/sobre" aria-current={active === "about" ? "page" : undefined} onClick={close}>Sobre</Link>
      <Link href="/produtos" aria-current={active === "products" ? "page" : undefined} onClick={close}>Produtos</Link>
      <Link href="/#como-funciona" onClick={close}>Como funciona</Link>
      <Link href="/#duvidas" onClick={close}>Dúvidas</Link>
      <a href="#contato" onClick={close}>Contato</a>
    </>
  );

  return (
    <>
      <button className={`mobile-menu-toggle${open ? " is-open" : ""}`} type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>
        <span /><span /><span />
      </button>
      <nav className="site-nav desktop-site-nav" aria-label="Navegação principal">{links}</nav>
      {open && createPortal(
        <>
          <button className="mobile-menu-overlay" type="button" aria-label="Fechar menu" onClick={close} />
          <nav id="site-navigation" className="mobile-site-nav" aria-label="Navegação principal">{links}</nav>
        </>,
        document.body,
      )}
    </>
  );
}
