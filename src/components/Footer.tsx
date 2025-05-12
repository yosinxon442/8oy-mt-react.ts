'use client';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="contaienr">
      <div className="left-foot">
        <h2 className="title">{t('footer.team_title')}</h2>
        <div className="stekn">
          {[...Array(9)].map((_, index) => (
            <div className="sektions" key={index}>
              <div className="reting"></div>
              <div>
                <h3>
                  Xusanov <br />
                  Alibek
                </h3>
                <p>{t('footer.developer')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="raginwis">
        <div className="content">
          <h1>{t('footer.consult_title')}</h1>
          <p>{t('footer.consult_desc')}</p>
        </div>

        <div className="phoneinp">
          <input className="inptext" type="text" placeholder={t('footer.name')} />
          <input className="inptext" type="tel" placeholder={t('footer.phone')} />
        </div>

        <button className="submit-btn">{t('footer.send')}</button>
      </div>
    </footer>
  );
};

export default Footer;
