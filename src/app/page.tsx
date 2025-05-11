import React from "react";
import "./globals.css";

const home = () => {
  return (
    <div className="container">
      <div className="hom">
        <div className="hom__1">
          <div>
            <h1>
              Yuqori sifatdagi <br />
              <span className="hom__span">aniqlikka asoslanib </span>
              <br />
              <span> istalgan turdagi</span> <br />
              dasturlarni tayyorlaymiz
            </h1>
            <button className="hom__1__btn">Xizmatlar haqida</button>
          </div>
        </div>

        <div className="hom__2">
          <img src="./img/notbuk.svg" alt="" />

          <div className="pos1"></div>
          <div className="pos2"></div>
          <div className="pos3">
            <div className="box-container">
              <div className="box">
                <img src="/icon/v1.svg" alt="chart" />
                <div>
                  <h3>7+ yillik</h3>
                  <p>Umumiy tajriba</p>
                </div>
              </div>
              <div className="box">
                <img src="./icon/v2.svg" alt="group" />
                <div>
                  <h3>5+</h3>
                  <p>Yirik loyihalar</p>
                </div>
              </div>
              <div className="box">
                <img src="./icon/v3.svg" alt="web" />
                <div>
                  <h3>8+</h3>
                  <p>Xizmat turlari</p>
                </div>
              </div>
              <div className="box">
                <img src="./icon/v4.svg" alt="security" />
                <div>
                  <h3>100%</h3>
                  <p>Xavfsizlik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hom_cont">
        <div>
          <p>
            Biz haqimizda <br />
            <span>Qisqacha ma’lumot</span>
          </p>
        </div>
      </div>

      <div className="hom__bxs">
        <div className="h-boxs">
          <img src="./img/p0.svg" alt="" />

          <div className="ranginfilter">
            <h3>Boshlanishi</h3>
            <p>
              Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib
              qo’ydik
            </p>
          </div>
        </div>

        <div className="h-boxs">
          <img src="./img/p1.svg" alt="" />

          <div className="ranginfilter">
            <h3>Uzoq muddatli loyihalar</h3>
            <p>
              Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda
              ishlab topshirdik
            </p>
          </div>
        </div>

        <div className="h-boxs">
          <img src="./img/p3.svg" alt="" />

          <div className="ranginfilter">
            <h3>Jamoamiz kengaymoqda</h3>
            <p>
              Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan
              boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda
            </p>
          </div>
        </div>
      </div>
      <p className="raning-p">
        Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

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
        <div className="divs decing">
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

      <div className="btn_conts">
        <button className="buton">Boshqa loyihalarni ko’rish</button>
      </div>

      <div className="baner">
        <h1>Xizmat turlari</h1>
        <p>Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:</p>
      </div>

      <div className="posinbx">

        <div className="posin_bx">
          <img src="./img/ic0.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic1.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic2.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic3.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic1.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic1.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic1.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic1.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>
        <div className="posin_bx">
          <img src="./img/ic1.svg" alt="" />
          <h3>Korporativ veb-sayt</h3>
          <p>
            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
          </p>
        </div>

      </div>

      <div className="baner">
        <h1>Biz bilan aloqa</h1>
        <p>Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz</p>
      </div>

    </div>
  );
};

export default home;
