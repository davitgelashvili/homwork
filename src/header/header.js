import './header.scss';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-lg-2 col-4">
                    <h1 className="header__logo">
                        LOGO
                    </h1>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                    <ul className="header__menu d-flex">
                        <li>
                          <Link to="/">მთავარი</Link>
                        </li>
                        <li>
                          <Link to="/news">სიახლეები</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-2 d-block d-lg-none">
                    <ul className="header__menu d-flex">
                        =
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-6 d-flex justify-content-end">
                    <div className="header__avatar">
                        icons
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
