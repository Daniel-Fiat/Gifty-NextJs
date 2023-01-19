import style from '../../styles/Login.module.css'
import elipseBlueUp from '../../public/assets/ElipseAzulArriba.png';
import elipsePinkUp from '../../public/assets/ElipseRosaArriba.png';
import elipseBlueDown from '../../public/assets/ElipseAzulAbajo.png';
import elipseYellowDown from '../../public/assets/ElipseAmarillaAbajo.png';
import UserApi from '../../services/user.service'
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/auth.context';
import { Row } from 'react-bootstrap';
import Image from 'next/image';

const Login = () => {
    const navigate = useRouter();
    const [user, setUser] = useState({})
    const [errUser, setError] = useState(false)
    const { storeSetToken, authentication } = useContext(AuthContext);

    const updateUser = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value });

    }
    const loginUser = (event) => {
        event.preventDefault()
        UserApi.login(user)
            .then((res) => {
                storeSetToken(res.token);
                authentication();
                navigate.push('/')
            })
            .catch(err => setError(true))
    }

    return (
        <Row>
            <div className={style.loginFormContainer}>
                <Image
                    className={style.elipseBlueUp}
                    src={elipseBlueUp}
                    alt="elipseBlueUp" />
                <Image
                    className={style.elipsePinkUp}
                    src={elipsePinkUp}
                    alt="elipsePinkUp" />
                <div id={style.LoginForm}>
                    <h1>Welcome</h1>
                    <span>Login</span>
                    <form onSubmit={loginUser}>
                        <input className={style.LoginInput}
                            onChange={updateUser}
                            type='email'
                            name='email'
                            placeholder='Email'>
                        </input>
                        <input className={style.LoginInput}
                            onChange={updateUser}
                            type='password'
                            name='password'
                            placeholder='************'>
                        </input>
                        <button type="submit" id={style.LoginBoton}>Login</button>
                        {errUser && <p id={style.msgred}>Password or User not match </p>}
                    </form>
                </div>
                <Image
                    className={style.elipseBlueDown}
                    src={elipseBlueDown}
                    alt="elipseBlueDown" />
                <Image
                    className={style.elipseYellowDown}
                    src={elipseYellowDown}
                    alt="elipseYellowDown" />
            </div>
        </Row>
    )
}
export default Login;