import { Image } from '@mantine/core';
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures';
import {
  CarouselData,
  IndustriesData,
  ServicesData,
  ServicesList,
  SituationsData,
} from '../data/data';
import { Carousel } from '@mantine/carousel';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const wheelGestures = WheelGesturesPlugin();

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="container" style={{ marginTop: 20 }}>
        <Carousel
          height={220}
          slideSize="155px"
          slideGap="md"
          withControls={false}
          withIndicators={false}
          withKeyboardEvents
          emblaOptions={{
            loop: false,
            align: 'start',
            slidesToScroll: 3,
          }}
          plugins={[wheelGestures]}
        >
          {CarouselData?.map((item) => (
            <Carousel.Slide key={item.id}>
              <div className="carousel-card">
                <img src={item.image} alt={t(item.title)} />
                <h4>{t(item.title)}</h4>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>

      <section className="container flex flex-col mt-9 gap-9 hero">
        <div className="hero-top">
          <Link to="https://census.stat.uz/auth" target="_blank">
            <Image
              radius="20px"
              src="https://assets.my.gov.uz/assets/mygov/img/villageBanner.png"
            />
          </Link>
        </div>
        <div className="hero-content">
          <div className="hero-content-left">
            <h1>
              {t('home.documents1')} — <br />
              <span>{t('home.documents2')}!</span>
            </h1>
            <button className="hero-card-btn">{t('home.fullInformation')}</button>
          </div>
          <div className="hero-content-right">
            <h1>
              {t('home.privateMessages1')} — <br />
              <span>{t('home.privateMessages2')}!</span>
            </h1>
            <button className="hero-card-btn">{t('home.fullInformation')}</button>
          </div>
        </div>
      </section>

      <section className="container industries">
        <div className="industries-top">
          <h1>{t('aside.fields')}</h1>
          <button className="allServices-btn">
            {t('home.allServices')} <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="industries-content">
          {IndustriesData?.map((item) => (
            <div key={item.id} className="industries-card">
              <h3 className="card-title">{t(item.title)}</h3>

              <div className="card-links">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    style={{ width: '18px', height: '18px' }}
                    className="icon2"
                  >
                    <path fill="currentColor" d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" />
                  </svg>
                  {t(item.text1)}
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    style={{ width: '18px', height: '18px' }}
                    className="icon2"
                  >
                    <path fill="currentColor" d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" />
                  </svg>
                  {t(item.text2)}
                </p>
                <span className="card-all">
                  <i className="fa-solid fa-chevron-right"></i> {t(item.btn)}
                </span>
              </div>

              <div className="card-bottom">
                <div className="card-icon">
                  <img src={item.image} alt={t(item.title)} style={{ filter: item.filter }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container situations">
        <h1>{t('aside.lifeEvents')}</h1>
        <div className="situations-content">
          {SituationsData?.map((item) => (
            <div key={item.id} className="situations-card">
              <img src={item.image} alt="*" />
              <h4>{t(item.title)}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="container portal-services">
        <h1>{t('home.options')}</h1>
        <div className="portal-services-content">
          {ServicesData?.map((item) => (
            <div key={item.id} className="service-card">
              {item.svg}
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container statistics">
        <div className="statistics-left">
          <h1>{t('home.statistics')}</h1>
          <p>{t('home.statisticsText')}</p>
          <button>
            {t('home.detail')} <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="statistics-right">
          <div className="user-statistics">
            <div className="p-2.5 bg-[#ffffff59] rounded-[10px] w-[50px] h-[50px] absolute top-3.5 right-3.5 flex items-center justify-center">
              <svg
                data-v-318135ed=""
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="icon2"
                style={{ width: 30, height: 30 }}
              >
                <path
                  fill="currentColor"
                  d="M8.75 6.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m14 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-9.75 6a1.75 1.75 0 0 0-1.75 1.75v3.75a4.5 4.5 0 1 0 9 0v-3.75A1.75 1.75 0 0 0 14.75 11zm-2.64.978q-.109.369-.11.772v3.75a5.49 5.49 0 0 0 2.035 4.272a4.5 4.5 0 0 1-5.763-3.107l-.712-2.656a1.75 1.75 0 0 1 1.237-2.144zm8.855 8.793a5.49 5.49 0 0 0 2.035-4.27v-3.75q-.001-.406-.11-.774l3.314.888a1.75 1.75 0 0 1 1.237 2.143l-.712 2.657a4.5 4.5 0 0 1-5.764 3.106"
                />
              </svg>
            </div>
            <h1>
              13
              <br />
              mln+
              <br />
              <span>{t('home.users')}</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="statistics-right-top">
              <div className="p-2.5 bg-[#ffffff59] rounded-[10px] w-[50px] h-[50px] absolute top-3.5 right-3.5 flex items-center justify-center">
                <svg
                  data-v-318135ed=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="icon2"
                  style={{ width: 30, height: 30 }}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01"
                  />
                </svg>
              </div>
              <h1>
                320+
                <br />
                <span>{t('home.organizations')}</span>
              </h1>
            </div>
            <div className="statistics-right-bottom">
              <div className="p-2.5 bg-[#ffffff59] rounded-[10px] w-[50px] h-[50px] absolute top-3.5 right-3.5 flex items-center justify-center">
                <svg
                  data-v-318135ed=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                  className="icon2"
                  style={{ width: 30, height: 30 }}
                >
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h1m4 9l-1 2.5M8 11l1 2.5m-5 0h6M7.03 2v1.5M4 3.75l1.3.75M4 7.25l1.3-.75M7.03 9V7.5m3.03-.25l-1.3-.75m1.3-2.75l-1.3.75" />
                    <circle cx="7.03" cy="5.5" r={2} />
                  </g>
                </svg>
              </div>
              <h1>
                800
                <br />
                <span>{t('home.introducedServices')}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="container popular-services">
        <div className="popular-services-top">
          <h1>{t('aside.popular')}</h1>
          <button>
            {t('home.allServices')} <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="popular-services-content">
          {ServicesList?.map((item) => (
            <div key={item.id} className="popular-services-card">
              <span className="service-badge">#{item.id}</span>

              <div className="service-icon">
                <img src={item.image} alt={t(item.title)} style={{ filter: item.filter }} />
              </div>

              <div className="service-info">
                <p className="service-name">{t(item.title)}</p>

                <div className="service-meta">
                  <div className="meta-block">
                    <i className="fa-regular fa-star"></i> <span>{item.rating}</span>
                  </div>

                  <div className="meta-block">
                    <i className="fa-regular fa-circle-check"></i> <span>{item.views}</span>
                  </div>

                  <div className="meta-block">
                    <i className="fa-regular fa-clock"></i> <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mobile-app">
        <div className="mobile-top">
          <h1>{t('home.app')}</h1>
          <h2>
            <span>MyGov</span> - {t('home.allInOne')}
          </h2>
          <h4>{t('home.allInOneDesc')}</h4>
        </div>
        <div className="mobile-app-content">
          <div className="app-content-left">
            <h3 className="montserrat-b text-[18px] mb-5">{t('home.forUsers')}</h3>
            <div className="flex gap-7">
              <ul className="flex flex-col app-list">
                <li>
                  <img
                    src="https://assets.my.gov.uz/assets/mygov/img/mobile/onlinePayment.png"
                    alt="*"
                  />
                  <p>{t('home.onlinePay')}</p>
                </li>
                <li>
                  <img
                    src="https://assets.my.gov.uz/assets/mygov/img/mobile/moreService.png"
                    alt="*"
                  />
                  <p>{t('home.moreServices')}</p>
                </li>
                <li>
                  <img src="https://assets.my.gov.uz/assets/mygov/img/mobile/faceId.png" alt="*" />
                  <p>MyID (Face ID)</p>
                </li>
                <li>
                  <img
                    src="https://assets.my.gov.uz/assets/mygov/img/mobile/pushNotification.png"
                    alt="*"
                  />
                  <p>PUSH-{t('home.notification')}</p>
                </li>
              </ul>
              <ul className="flex flex-col app-list">
                <li>
                  <img
                    src="https://my.gov.uz/img/mobile/muxlisa.png?format=webp&quality=75"
                    alt="*"
                  />
                  <p>Muxlisa AI</p>
                </li>
                <li>
                  <img src="https://assets.my.gov.uz/assets/mygov/img/mobile/service.png" alt="*" />
                  <p>{t('home.debate')}</p>
                </li>
                <li>
                  <img
                    src="https://assets.my.gov.uz/assets/mygov/img/mobile/documents.png"
                    alt="*"
                  />
                  <p>{t('home.dataBase')}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="app-content-right w-[30%] ">
            <h2 className="text-[18px] montserrat-m mb-5">{t('home.scanForDownload')}</h2>
            <div className="links flex gap-5 flex-1">
              <div className="flex flex-col justify-between">
                <Link
                  to="https://play.google.com/store/apps/details?id=uz.uzinfocom.mygov"
                  target="_blank"
                >
                  <img
                    className="links-img"
                    src="https://assets.my.gov.uz/assets/mygov/img/GooglePlay.svg"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://apps.apple.com/us/app/mygov-davlat-xizmatlari/id1544175166"
                  target="_blank"
                >
                  <img
                    className="links-img"
                    src="https://assets.my.gov.uz/assets/mygov/img/AppStore.svg"
                    alt=""
                  />
                </Link>
              </div>
              <img
                className="w-30 h-30 links-img"
                src="https://assets.my.gov.uz/assets/mygov/img/qr_code.svg"
                alt="*"
              />
            </div>
          </div>
          <p className="mt-[40px] pb-3 text-right absolute bottom-3 right-0">
            {t('home.lastChangedAt')}: 13.10.2025 - 12:39
          </p>
        </div>
        <div className="mobile-bottom"></div>
      </section>
    </>
  );
};

export default Home;
