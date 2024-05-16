import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, i) => (
            <li
              key={i}
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
