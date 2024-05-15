import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 ">
          {navLinks.map((item, i) => (
            <li
              key={i}
              href={item.href}
              className="font-montserrat leading-normal"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
