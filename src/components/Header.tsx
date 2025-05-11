'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState('uz');

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);

    // Bu joyda siz `router.push()` orqali URL o‘zgartirishingiz yoki i18n bilan bog‘lashingiz mumkin
    // Masalan: router.push(`/${selectedLang}${pathname}`)
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <img src="/log/logo.svg" alt="Noventer logo" className={styles.logo} />
          {/* <span className={styles.brand}>Noventer</span> */}
        </div>

        <ul className={styles.links}>
          <li>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>Bosh sahifa</Link>
          </li>
          <li>
            <Link href="/portfolio" className={pathname === '/portfolio' ? styles.active : ''}>Portfolio</Link>
          </li>
          <li>
            <Link href="/xizmatlar" className={pathname === '/xizmatlar' ? styles.active : ''}>Xizmatlar</Link>
          </li>
          <li>
            <Link href="/aloqa" className={pathname === '/aloqa' ? styles.active : ''}>Aloqa</Link>
          </li>
        </ul>

        <div className={styles.right}>
          <select className={styles.select} value={lang} onChange={handleLangChange}>
            <option value="uz">Uz</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
          <button className={styles.button}>Loyiha bormi ?</button>
        </div>
      </nav>
    </header>
  );
}
