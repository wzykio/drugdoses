import React, { useContext } from "react";
import style from "./LegalContent.module.css";
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const LegalContent = () => {

  const [{ langu }] = useContext(StoreContext);
  const { information, menuOptions } = lang[langu];
  const { legal } = menuOptions

  return (
    <div className={style.LegalWrapper}>

      <h1>{information.heading}</h1>
      <h4>{legal.content}</h4>
      <h2>{legal.content2}</h2>
      <h2>{information.subheading}</h2>
      <h3>Weryfikuj każdą dawkę zgodnie z twoją wiedzą medyczną!</h3>
      <h2>{information.subheading2}</h2>
      <h4>{information.disclaimer}</h4>
      <p>Korzystanie z aplikacji oznacza akceptację powyższych warunków</p>
      <p></p>
      <p>Projekt Open Source na licencji MIT</p>
      <p>Copyright (c) 2020 wzykio</p>
      <a href="https://github.com/wzykio/drugdoses" rel="noreferrer" target="_blank">https://github.com/wzykio/drugdoses</a>

    </div>
  );
};
export default LegalContent;
