'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';
import styles from './Header.module.css';
import '@/i18n';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState('uz');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <img src="/log/logo.svg" alt="Noventer logo" className={styles.logo} />
        </div>

        <ul className={styles.links}>
          <li>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>{t('nav.home')}</Link>
          </li>
          <li>
            <Link href="/portfolio" className={pathname === '/portfolio' ? styles.active : ''}>{t('nav.portfolio')}</Link>
          </li>
          <li>
            <Link href="/xizmatlar" className={pathname === '/xizmatlar' ? styles.active : ''}>{t('nav.services')}</Link>
          </li>
          <li>
            <Link href="/aloqa" className={pathname === '/aloqa' ? styles.active : ''}>{t('nav.contact')}</Link>
          </li>
        </ul>

        <div className={styles.right}>
          <select className={styles.select} value={lang} onChange={handleLangChange}>
            <option value="uz">Uz</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
          <button className={styles.button}>{t('nav.project')}</button>
        </div>

        <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.links}>
            <li>
              <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            </li>
            <li>
              <Link href="/portfolio" className={pathname === '/portfolio' ? styles.active : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.portfolio')}</Link>
            </li>
            <li>
              <Link href="/xizmatlar" className={pathname === '/xizmatlar' ? styles.active : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</Link>
            </li>
            <li>
              <Link href="/aloqa" className={pathname === '/aloqa' ? styles.active : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
            </li>
          </ul>
          <div className={styles.right}>
            <select className={styles.select} value={lang} onChange={handleLangChange}>
              <option value="uz">Uz</option>
              <option value="en">En</option>
              <option value="ru">Ru</option>
            </select>
            <button className={styles.button}>{t('nav.project')}</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
