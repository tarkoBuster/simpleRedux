import classes from "./Auth.module.css";
import {userAuthActions} from "../store/userAuthSlice";
import {useDispatch, useSelector} from "react-redux";

const Auth = () => {

    const dispatchFunction = useDispatch();
    const isFormVisible = useSelector((state) => state.auth.isUserLoggedIn);
    const isUserLogged = (event) => {
        event.preventDefault();
        dispatchFunction(userAuthActions.logIn())
    };


    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={isUserLogged}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password"/>
                    </div>
                    <button>Войти</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
