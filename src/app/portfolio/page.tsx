'use client';

import { useTranslation } from 'react-i18next';
import "./page.css"

const PortfolioPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className='container'>
        <div className="xiz_top">
        <div className="xis-h1">
          <h1>
          {t("chime.tok1")} <br />
            <span className="xis-sit">{t("chime.tok2")}</span> <br />
            <span className="xis-sit2">{t("chime.tok3")}</span> <br />
            {t("chime.tok4")}</h1>
        </div>
        <div className="xis-img">
          <img src="./img/port1.png" alt="" />
        </div>
      </div>

      <div className="baner">
        <h1>{t("chime.tok5")}</h1>
        <p>{t("chime.tok6")}</p>
      </div>

      <div className="cont_divs">
        <div className="divs">
          <img src="./img/ran.svg" alt="" />
        </div>
        <div className="divs">
          <h3>{t("chime.tok7")}</h3>
          <p>
            {t("chime.tok8")}
          </p>
          <button className="btn">{t("chime.tok9")}</button>
        </div>
      </div>

      <div className="cont_divs">
        <div className="divs order decing">
          <h3>{t("chime.tok10")}</h3>
          <p>
            {t("chime.tok11")}
          </p>
          <button className="btn">{t("chime.tok9")}</button>
        </div>
        <div className="divs">
          <img src="./img/re1.svg" alt="" />
        </div>
      </div>

      <div className="cont_divs">
        <div className="divs">
          <img src="./img/re2.svg" alt="" />
        </div>
        <div className="divs">
          <h3>{t("chime.tok12")}</h3>
          <p>
          {t("chime.tok11")}
          </p>
          <button className="btn">{t("chime.tok9")}</button>
        </div>
      </div>

      <div className="baner">
        <h1>{t("contact_section.title")}</h1>
        <p>{t("contact_section.subtitle")}</p>
      </div>
    </div>
  )
}

export default PortfolioPage
