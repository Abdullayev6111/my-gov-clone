import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="container">
      <div className="footer-top">
        <h2>{t('footer.question')}?</h2>
        <div className="flex gap-2">
          <button className="reaction-btn">
            {t('footer.yes')} <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button className="reaction-btn">
            {t('footer.no')} <i className="fa-solid fa-thumbs-down"></i>
          </button>
        </div>
        <h2>1180 {t('footer.personLiked')}</h2>
      </div>
      <div className="footer-content">
        <svg
          data-v-61bd3130=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 186 48"
          width={186}
          height={48}
          className="icon2 logo"
          style={{ width: '100%', height: '100%' }}
        >
          <path
            className="a"
            fill="#4ec1f1"
            d="m5.1 1h17.8c2.3 0 4.1 1.8 4.1 4.1v0.7h-15.7c-1.5 0-2.9 0.6-3.9 1.6-1.1 1-1.6 2.4-1.6 3.9v15.7h-0.7c-2.3 0-4.1-1.8-4.1-4.1v-17.8c0-2.3 1.8-4.1 4.1-4.1z"
          />
          <path
            className="b"
            fill="#71b164"
            d="m11.3 7h18.4c2.4 0 4.3 1.9 4.3 4.3v0.5h-16.2c-1.7-0.1-3.4 0.6-4.5 1.8-1.1 1.4-1.7 3.2-1.6 4.9v15.6h-0.4c-2.4 0-4.3-2-4.3-4.3v-18.5c0-2.4 1.9-4.3 4.3-4.3z"
          />
          <path
            fillRule="evenodd"
            className="c"
            fill="#008ddb"
            d="m17.8 13h24.5c2.7 0 4.9 2.2 4.9 4.9v24.5c0 2.7-2.2 4.9-4.9 4.9h-24.5c-2.7 0-4.9-2.2-4.9-4.9v-23.9c0-3.4 1.7-5.5 4.9-5.5zm7.1 22.4c-0.4-0.3-1.4-3.2-2.9-3.9-0.7-0.4-2.8 1.4-3.1 2.4-0.1 0.5 0.4 0.9 0.7 1.3q1.4 1.7 2.3 3.7c0.6 1.1 0.7 1.6 2.3 1.8 1.8-0.1 1.9 0.1 2.7-1.1q0.9-1.2 1.6-2.5c4.1-7.1 7.6-11.2 13.5-16.9l0.4-1.5c-6.4 4.1-12.1 9.4-16.5 15.6-0.3 0.4-0.5 1.1-1 1.1z"
          />
          <path
            fillRule="evenodd"
            className="d"
            fill="#0082c1"
            d="m63.5 19.4q0.7-0.6 1.5-1c0.7-0.3 1.5-0.5 2.3-0.4q0.7-0.1 1.5 0.1 0.6 0.2 1.2 0.5 0.4 0.2 0.8 0.6 0.3 0.2 0.5 0.4 0.7-0.7 1.6-1.1c0.8-0.4 1.7-0.6 2.6-0.5 1.4-0.1 2.8 0.3 3.8 1.2q1.4 1.3 1.4 4.2v8.7h-3.9v-8.8q0-2.2-0.6-3c-0.4-0.6-1-0.9-1.7-0.9q-0.8 0-1.5 0.3-0.6 0.3-1.1 0.8 0.2 0.3 0.3 0.7 0.1 0.4 0.1 0.8 0.1 0.7 0.1 1.3v8.8h-3.8v-8.8q0-2.2-0.7-3c-0.4-0.6-1-0.9-1.7-0.9q-0.7 0-1.3 0.4-0.5 0.3-0.9 0.8 0 0.1 0 0.4 0.1 0.2 0.1 0.5 0.1 0.3 0.1 0.6v10h-3.9v-10q0-0.6 0-1.2-0.1-0.5-0.3-1-0.2-0.4-0.6-0.6-0.5-0.2-1.1-0.2h-0.3v-0.8h2.9q0.8-0.1 1.6 0.2c0.4 0.2 0.7 0.5 0.9 0.9zm27.1 14.6q-0.3 1.1-0.9 2-0.5 0.7-1.1 1.2-0.5 0.4-1.2 0.6-0.7 0.2-1.4 0.2h-1.2v-1q0.7 0 1.4-0.2 0.6-0.1 1.1-0.4 0.6-0.4 1-0.9 0.5-0.6 0.7-1.4l0.6-1.6-5.3-11.6q-0.9-2.1-2.7-2.4v-0.5h2.6c0.8-0.1 1.6 0.2 2.3 0.6 0.7 0.4 1.2 1 1.5 1.7l3.4 7.4 3.6-9.5h1.6c0 0-6 15.8-6 15.8zm10.6-3.3c0 0.5-0.2 1-0.5 1.3-0.7 0.7-1.9 0.7-2.6 0-0.7-0.7-0.7-1.8 0-2.6 0.7-0.6 1.9-0.6 2.6 0 0.3 0.4 0.5 0.8 0.5 1.3zm2.8-8.1c0-0.8 0.1-1.5 0.5-2.2 0.3-0.6 0.8-1.1 1.3-1.4q1-0.6 2.1-0.8 1.2-0.3 2.4-0.2h6.2v0.8l-2.6 0.3c0.8 0.3 1.5 0.8 2 1.4 0.5 0.6 0.8 1.3 0.8 2.1 0 0.7-0.2 1.4-0.5 2.1-0.3 0.6-0.7 1-1.3 1.4q-0.9 0.6-2 0.8-1.2 0.2-2.6 0.2-1 0-2.1 0.1-0.8 0.2-0.8 0.8 0 0.5 0.8 0.6 1.1 0.2 2.1 0.2 1.5 0 2.9 0.3 1.2 0.3 2.2 0.9 1 0.5 1.6 1.4c0.4 0.6 0.6 1.3 0.6 2 0 1.5-0.8 2.9-2.1 3.6q-1.1 0.6-2.3 0.8c-1.9 0.3-3.8 0.3-5.7 0q-1.2-0.2-2.3-0.8c-1.4-0.7-2.2-2.1-2.1-3.6q0-0.7 0.4-1.4 0.3-0.6 0.9-1.1 0.6-0.5 1.3-0.8 0.7-0.3 1.4-0.5-0.5-0.2-0.9-0.6c-0.3-0.2-0.5-0.6-0.4-1 0-0.7 0.5-1.3 1.2-1.5-0.9-0.3-1.6-0.8-2.1-1.5-0.6-0.7-0.9-1.6-0.9-2.4zm5.2 7.4c-0.6 0.2-1.2 0.7-1.5 1.2-0.5 0.7-0.6 1.5-0.6 2.2-0.1 0.9 0.2 1.8 0.9 2.5 1.4 1 3.3 1 4.7 0 0.6-0.7 1-1.6 0.9-2.5 0-0.8-0.3-1.6-0.8-2.1-0.6-0.6-1.4-1-2.2-1.2 0 0-1.4-0.1-1.4-0.1zm3.5-7.4c0.1-0.9-0.2-1.8-0.7-2.6-0.4-0.5-1-0.9-1.7-0.9-0.6 0-1.3 0.3-1.7 0.8-0.5 0.8-0.7 1.7-0.6 2.7-0.1 0.9 0.1 1.8 0.6 2.5 0.5 0.5 1.1 0.8 1.7 0.8 0.7 0 1.3-0.3 1.7-0.8 0.5-0.7 0.8-1.6 0.7-2.5zm6.5 2.6q0-1.5 0.5-2.9 0.4-1.2 1.4-2.2 0.9-1 2.2-1.6c1.9-0.7 4-0.7 5.9 0q1.3 0.6 2.2 1.6 1 1 1.4 2.2c0.7 1.9 0.7 3.9 0 5.7q-0.4 1.3-1.4 2.3-0.9 1-2.2 1.5c-1.9 0.8-4 0.8-5.9 0q-1.3-0.5-2.2-1.5-1-1-1.4-2.3-0.5-1.4-0.5-2.8zm10.1 0q0.1-1.2-0.1-2.4-0.2-0.9-0.6-1.8-0.4-0.8-1-1.3c-0.8-0.6-1.9-0.6-2.7 0q-0.6 0.5-1 1.3-0.4 0.9-0.6 1.8-0.3 2.4 0 4.7 0.2 1 0.6 1.9 0.4 0.7 1 1.2c0.8 0.6 1.9 0.6 2.7 0q0.6-0.5 1-1.2 0.4-0.9 0.6-1.9 0.2-1.1 0.1-2.3zm7-3.6q-0.5-1.2-1.3-2.3c-0.3-0.4-0.8-0.6-1.3-0.7v-0.6q0.1 0 0.5 0 0.4 0 0.6 0 0.8 0 1.7 0.1 0.7 0.2 1.5 0.5 0.7 0.5 1.3 1.2 0.7 0.8 1.1 1.8l2.6 5.7 4-9h1.6l-6.3 14.1h-1c0 0-5-10.8-5-10.8zm16.4 9.1c0.1 0.5-0.1 1-0.4 1.3-0.8 0.7-1.9 0.7-2.7 0-0.6-0.7-0.6-1.8 0-2.6 0.8-0.6 1.9-0.6 2.7 0 0.3 0.4 0.5 0.8 0.4 1.3zm3.6-8.6q0.1-1.1-0.4-2.2-0.3-0.8-1.6-0.8h-0.3v-0.8h3.5q0.7-0.1 1.3 0.1 0.5 0.2 0.8 0.7 0.3 0.5 0.4 1.2 0.2 0.9 0.1 1.8v4.9q0 2.3 0.7 3.2c0.4 0.6 1.1 0.9 1.9 0.9q0.6 0 1.1-0.3 0.5-0.3 0.8-0.7 0.4-0.4 0.7-0.9v-10.9h3.8v13.8h-2.5l-1-1.3h-0.1q-0.5 0.4-1 0.8-0.6 0.4-1.2 0.6-0.7 0.2-1.5 0.2-2.8 0-4.1-1.3-1.4-1.3-1.4-4.1c0 0 0-4.9 0-4.9zm28.8-3.8l-8.4 12.5h7.7v1.3h-12.3v-0.9l7.7-11.6h-3.5c-0.9-0.1-1.8 0.1-2.6 0.7-0.6 0.5-0.8 1.3-0.8 2.1h-0.8v-1.8q0-0.4 0.1-0.9 0.1-0.4 0.3-0.7 0.4-0.4 0.8-0.5 0.6-0.3 1.3-0.2z"
          />
        </svg>
        <h1>{t('footer.portal')}</h1>
        <p>
          {t('footer.portalDesc1')} <br />
          {t('footer.portalDesc2')}
        </p>
        <div className="flex gap-12 footer-links">
          <ul className="flex flex-col gap-1">
            <h1>{t('footer.data')}</h1>
            <Link to="https://my.gov.uz/uz/statistics">{t('footer.statistics')}</Link>
            <Link to="https://my.gov.uz/uz/page/mission">{t('footer.portalMission')}</Link>
            <Link to="https://my.gov.uz/">{t('footer.organization')}</Link>
            <Link to="https://my.gov.uz/uz/free-wifi-zones">{t('footer.wifiZones')}</Link>
            <Link to="https://my.gov.uz/uz/faq">{t('footer.faq')}</Link>
          </ul>
          <ul className="flex flex-col gap-1">
            <h1>{t('footer.forUsers')}</h1>
            <Link to="https://my.gov.uz/">{t('footer.physicalPerson')}</Link>
            <Link to="https://my.gov.uz/">{t('footer.legalPerson')}</Link>
            <Link to="https://my.gov.uz/for-foreigners">{t('footer.foreigners')}</Link>
            <Link to="https://my.gov.uz/instructions">{t('footer.instruction')}</Link>
          </ul>
          <ul className="flex flex-col gap-1">
            <h1>{t('footer.support')}</h1>
            <Link to="https://my.gov.uz/contact">{t('footer.contact')}</Link>
            <Link to="https://my.gov.uz/feedback">{t('footer.feedback')}</Link>
            <Link to="tel:1242">1242-my.gov.uz {t('footer.allQuestions')} (24/7)</Link>
            <Link to="tel:1148">1148-{t('footer.complaints')}</Link>
            <Link target="_blank" to="https://eanticor.uz/uz/">
              {t('footer.againCorruption')}
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="flex gap-10 items-center">
          <div className="flex gap-2.5">
            <button className="w-[35px] h-[35px] rounded-[10px] border border-[#454545] text-[#454545] montserrat-r text-[14px] cursor-pointer">
              <i className="fa-brands fa-youtube"></i>
            </button>
            <button className="w-[35px] h-[35px] rounded-[10px] border border-[#454545] text-[#454545] montserrat-r text-[14px] cursor-pointer">
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button className="w-[35px] h-[35px] rounded-[10px] border border-[#454545] text-[#454545] montserrat-r text-[14px] cursor-pointer">
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button className="w-[35px] h-[35px] rounded-[10px] border border-[#454545] text-[#454545] montserrat-r text-[14px] cursor-pointer">
              <i className="fa-brands fa-telegram"></i>
            </button>
          </div>
          <div className="flex gap-5">
            <Link to="https://my.gov.uz/uz/page/privacy-policy">{t('footer.privacyPolicy')}</Link>
            <Link to="https://my.gov.uz/uz/page/terms-of-use">{t('footer.termsOfUse')}</Link>
            <Link to="https://my.gov.uz/uz/page/sitemap">{t('footer.sitemap')}</Link>
            <Link to="https://my.gov.uz/uz/page/ai-usage">{t('footer.useai')}</Link>
          </div>
        </div>
        <div className="flex gap-8">
          <Link to="https://egov.uz/" target="_blank">
            <img
              className="w-[170px] h-[43px] brightness-[0.3]"
              src="https://my.gov.uz/img/egovuz.svg?format=webp&quality=75"
              alt="*"
            />
          </Link>
          <Link to="https://uzinfocom.uz/" target="_blank">
            <img
              className="w-[170px] h-[26px] brightness-[0.3]"
              src="https://my.gov.uz/img/uzinfocomLogoText.png?format=webp&quality=75"
              alt="*"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
