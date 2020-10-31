import React from 'react';
import style from './Creator.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Creator = ({ creator }) => {
  const { name, avatar, linkedin, github, description } = creator;
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        { avatar ? <img src={avatar} alt={name} className={style.avatar} /> : null }
        <div className={style.info}>
          <h4 className={`${style.info__element} ${style.info__name}`}>{name}</h4>
          { linkedin ? <a href={linkedin} className={`${style.info__element} ${style.link}`}>
            <FaLinkedin className={style.icon}/>Linkedin
          </a> : null }
          { github ? <a href={github}  className={`${style.info__element} ${style.link}`}>
            <FaGithub className={style.icon}/>Github
          </a> : null }
        </div>
      </div>
      <p className={style.description}>{description}</p>
    </section>
  );
};

export default Creator;
