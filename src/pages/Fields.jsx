import { useTranslation } from 'react-i18next';
import { IndustriesData } from '../data/data';

const Fields = () => {
  const { t } = useTranslation();
  return (
    <section className="container industries">
      <div className="industries-top">
        <h1 style={{ fontSize: 35, fontFamily: 'montserrat-b' }}>{t('aside.fields')}</h1>
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
  );
};

export default Fields;
