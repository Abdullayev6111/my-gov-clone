import { Link } from 'react-router-dom';
import LanguageSelect from './LanguageSelect';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="container">
      <Link className="header-title">
        {t('header.title1')} <br />
        {t('header.title2')}
      </Link>
      <form>
        <button className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input type="text" placeholder="Xizmat izlash" />
      </form>

      <button className="sos-btn">
        <svg
          width={44}
          height={44}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon2"
          style={{ width: 48, height: 48 }}
        >
          <rect
            x={1}
            y={1}
            width={42}
            height={42}
            rx={21}
            className="stroke-[#0468DD] icon2-stroke"
            strokeWidth={2}
          />
          <g clipPath="url(#clip0_9409_36152)" transform="scale(1.2) translate(-3.5, -4)">
            <path
              className="stroke-[#0468DD] icon2-stroke"
              d="M18 26V22C18 20.9391 18.4214 19.9217 19.1716 19.1716C19.9217 18.4214 20.9391 18 22 18C23.0609 18 24.0783 18.4214 24.8284 19.1716C25.5786 19.9217 26 20.9391 26 22V26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 22H14M22 13V14M30 22H31M15.6 15.6L16.3 16.3M28.4 15.6L27.7 16.3"
              stroke="#FF3A44"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon2-stroke"
            />
            <path
              className="stroke-[#0468DD] icon2-stroke"
              d="M27 26H17C16.4477 26 16 26.4477 16 27V29C16 29.5523 16.4477 30 17 30H27C27.5523 30 28 29.5523 28 29V27C28 26.4477 27.5523 26 27 26Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_9409_36152">
              <rect width={24} height={24} fill="white" transform="translate(10 10)" />
            </clipPath>
          </defs>
        </svg>
        <div>
          <h3 className="text-base montserrat-b font-bold">112</h3>
          <p className="text-sm montserrat-r font-normal">SOS</p>
        </div>
      </button>

      <div className=" border-s-2 border-e-2 border-[#0068e0] cursor-pointer re-call">
        <div className="flex items-center gap-2.5 reCall-btn">
          <div className="w-9.5 h-9.5 rounded-[50%] border-3 border-[#0068e0] flex items-center justify-center phone-circle">
            <i className="fa-solid fa-phone text-[#0068e0] text-lg font-normal"></i>
          </div>
          <div>
            <h3 className="text-base montserrat-b font-bold text-[#0068e0]">1242</h3>
            <p className="text-sm montserrat-r font-normal text-[#0068e0]">
              {t('header.feedback')}
            </p>
          </div>
        </div>
      </div>

      <LanguageSelect />

      <button className="specials-btn">
        <i className="fa-solid fa-person"></i>
      </button>

      <button className="login-btn">
        <i className="fa-regular fa-user"></i>
        {t('header.personal')}
      </button>
    </header>
  );
};

export default Header;
