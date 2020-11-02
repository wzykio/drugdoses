import React, { useContext } from 'react';
import style from './AboutContent.module.css';
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';
import creators from '../../data/creatorsData';
import Creator from '../Creator/Creator';

const AboutContent = () => {
  const [{ langu }] = useContext(StoreContext);
  const { about } = lang[langu].menuOptions;

  return (
    <>
      <article className={style.article}>
        <h4 className={style.subheading}>{about.subheadingCompany}</h4>
        <p className={style.content}>
          {about.contentCompany} {about.website}
        </p>
      </article>
      <article className={style.article}>
        <h4 className={style.subheading}>{about.subheadingTeam}</h4>
        <div className={style.creators}>
          {creators.map((creator) => (
            <Creator creator={creator} />
          ))}
        </div>
      </article>
    </>
  );
};

export default AboutContent;