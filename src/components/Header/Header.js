import React, { useContext } from "react"
import style from "./Header.module.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import Menu from "../Menu/Menu"
import { StoreContext } from "../../states/Store"
import { lang } from "../../states/localization/index"
import { FaPills } from "react-icons/fa"

const Header = () => {
  const [{ showMenuOption, openMenu, langu }, dispatch] = useContext(
    StoreContext
  )
  const { header } = lang[langu]

  return (
    <div>
      <div className={style.header}>
        <div className={style.title}>
          <p><FaPills></FaPills>{header.top}</p>
        </div>
        <div className={style.navicon}>
          {openMenu ? (
            <IoMdClose 
              onClick={() => {
                !showMenuOption && dispatch({ type: "TOGGLE_MENU" })
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                !showMenuOption && dispatch({ type: "TOGGLE_MENU" })
              }}
            />
          )}
        </div>
      </div>
      <Menu/>
    </div>
  )
}
export default Header
