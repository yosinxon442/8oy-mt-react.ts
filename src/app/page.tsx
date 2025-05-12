'use client';

import React from "react";
import { useTranslation } from 'react-i18next';
import "./globals.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="hom">
        <div className="hom__1">
          <div>
            <h1>
              {t("hero.title1")} <br />
              <span className="hom__span">{t("hero.title2")}</span><br />
              <span id="hom__spa221">{t("hero.title3")}</span><br />
              {t("hero.title4")}
            </h1>
            <button className="hom__1__btn">{t("hero.button")}</button>
          </div>
        </div>

        <div className="hom__2">
          <img src="./img/notbuk.svg" alt="" />
          <div className="pos1"></div>
          <div className="pos2"></div>
          <div className="pos3">
            <div className="box-container">
              <div className="box">
                <img className="baring" src="/icon/v1.svg" alt="chart" />
                <div>
                  <h3>{t("experience.years")}</h3>
                  <p>{t("experience.description1")}</p>
                </div>
              </div>
              <div className="box">
                <img className="baring" src="./icon/v2.svg" alt="group" />
                <div>
                  <h3>{t("experience.projects")}</h3>
                  <p>{t("experience.description2")}</p>
                </div>
              </div>
              <div className="box">
                <img className="baring" src="./icon/v3.svg" alt="web" />
                <div>
                  <h3>{t("experience.services")}</h3>
                  <p>{t("experience.description3")}</p>
                </div>
              </div>
              <div className="box">
                <img className="baring" src="./icon/v4.svg" alt="security" />
                <div>
                  <h3>{t("experience.security")}</h3>
                  <p>{t("experience.description4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hom_cont">
        <div>
          <p>
            {t("about.title")} <br />
            <span>{t("about.subtitle")}</span>
          </p>
        </div>
      </div>

      <div className="hom__bxs">
        <div className="h-boxs">
          <img src="./img/p0.svg" alt="" />
          <div className="ranginfilter">
            <h3>{t("about.box1.title")}</h3>
            <p>{t("about.box1.text")}</p>
          </div>
        </div>

        <div className="h-boxs">
          <img src="./img/p1.svg" alt="" />
          <div className="ranginfilter">
            <h3>{t("about.box2.title")}</h3>
            <p>{t("about.box2.text")}</p>
          </div>
        </div>

        <div className="h-boxs">
          <img src="./img/p3.svg" alt="" />
          <div className="ranginfilter">
            <h3>{t("about.box3.title")}</h3>
            <p>{t("about.box3.text")}</p>
          </div>
        </div>
      </div>

      <p className="raning-p">{t("more_info")}</p>

      <div className="baner">
        <h1>{t("projects.title")}</h1>
        <p>{t("projects.subtitle")}</p>
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

      <div className="btn_conts">
        <button className="buton">{t("projects.all_button")}</button>
      </div>

      <div className="baner">
        <h1>{t("services_section.title")}</h1>
        <p>{t("services_section.subtitle")}</p>
      </div>

      <div className="posinbx">
        {[...Array(9)].map((_, idx) => (
          <div className="posin_bx" key={idx}>
            <img src={`./img/ic${idx % 4}.svg`} alt="" />
            <h3>{t(`services.service${idx + 1}.title`)}</h3>
            <p>{t(`services.service${idx + 1}.desc`)}</p>
          </div>
        ))}
      </div>

      <div className="baner">
        <h1>{t("contact_section.title")}</h1>
        <p>{t("contact_section.subtitle")}</p>
      </div>
    </div>
  );
};

export default Home;
