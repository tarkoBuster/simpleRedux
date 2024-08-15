import classes from "./Header.module.css";
import {userAuthActions} from "../store/userAuthSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

    const dispatchFunction = useDispatch();
    const isUserLogged = useSelector((state) => state.auth.isUserLoggedIn);

    const userLoggedOut = () => {
        dispatchFunction(userAuthActions.sighOut())
    };

    return (
        <header className={classes.header}>
            <h1>Redux</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    {isUserLogged && <li>
                        <a href="/">Мои продажи</a>
                    </li>}
                    <li>
                        <a href="/">О нас</a>
                    </li>
                    <li>
                        <a href="/">Контакты</a>
                    </li>
                    <li>
                        {isUserLogged && <button onClick={userLoggedOut}>Выйти</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
