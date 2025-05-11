import React from 'react'
import "./page.css"

const PortfolioPage = () => {
  return (
    <div className='container'>
        <div className="xiz_top">
        <div className="xis-h1">
          <h1>
          Tajribamiz davomida <br />
            <span className="xis-sit">turli xil hajmdagi</span> <br />
            <span className="xis-sit2">IT loyihalarini</span> <br />
            ishga tushira oldik          </h1>
        </div>
        <div className="xis-img">
          <img src="./img/port1.png" alt="" />
        </div>
      </div>

      <div className="baner">
        <h1>Loyihalarimiz</h1>
        <p>biz haqimizda gapirsin !</p>
      </div>

      <div className="cont_divs">
        <div className="divs">
          <img src="./img/ran.svg" alt="" />
        </div>
        <div className="divs">
          <h3>Tourmad loyihasi</h3>
          <p>
            Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida
            ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z
            ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran
            xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar
            xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan
            tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va
            qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va
            o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
          </p>
          <button className="btn">Loyihani ko’rish</button>
        </div>
      </div>

      <div className="cont_divs">
        <div className="divs order decing">
          <h3>ProRun loyihasi</h3>
          <p>
            Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha
            musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda
            istalgan yoki har bir musobaqada qatnashishingiz mumkin.  Nima uchun
            sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois
            ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish
            uchun yangi web ilova ishlab chiqildi.
          </p>
          <button className="btn">Loyihani ko’rish</button>
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
          <h3>Xalq trans loyihasi</h3>
          <p>
            Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="btn">Loyihani ko’rish</button>
        </div>
      </div>

      <div className="baner">
        <h1>Biz bilan aloqa</h1>
        <p>Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz</p>
      </div>
    </div>
  )
}

export default PortfolioPage
