import style from '../../styles/RegisterPage.module.css'
import elipseBlueUp from '../../public/assets/ElipseAzulArriba.png';
import elipsePinkUp from '../../public/assets/ElipseRosaArriba.png';
import elipseBlueDown from '../../public/assets/ElipseAzulAbajo.png';
import elipseYellowDown from '../../public/assets/ElipseAmarillaAbajo.png';

import UserApi from '../../services/user.service'
import { useContext, useState } from 'react';
import { Row } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/auth.context';


const Register = () => {

    const navigate = useRouter();
    const [user, setUser] = useState({})
    const [matchPass, setMatchPass] = useState(false)
    const [errUserCreate, setError] = useState(false)
    const { storeSetToken, authentication } = useContext(AuthContext);


    const createNewUSer = (event) => {
        event.preventDefault()
        if (matchPass && user.email) {
            UserApi.createUser(user)
                .then(() => {
                    UserApi.login(user)
                        .then((res) => {
                            storeSetToken(res.token);
                            authentication();
                            history.go(-2)
                        })
                })
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }
    const updateNewUser = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value });
    }
    const testmatchPass = (event) => {
        const { value } = event.target
        if (value === user?.password) { setMatchPass(true) }
        else { setMatchPass(false) }
    }


    return (
        <Row>
            <div className={style.registerFormContainer}>
                <Image
                    className={style.elipseBlueUp}
                    src={elipseBlueUp}
                    alt="elipseBlueUp" />
                <Image
                    className={style.elipsePinkUp}
                    src={elipsePinkUp}
                    alt="elipsePinkUp" />
                <div id={style.registerForm}>
                    <h1>Register</h1>
                    <form onSubmit={createNewUSer}>
                        <input className={style.RegisterInput}
                            onChange={updateNewUser}
                            type='email'
                            name='email'
                            placeholder='Email'>
                        </input>
                        <input className={style.RegisterInput}
                            onChange={updateNewUser}
                            type='password'
                            name='password'
                            placeholder='************'>
                        </input>
                        <input className={style.RegisterInput}
                            onChange={testmatchPass}
                            type='password'
                            name='pass2'
                            placeholder='************'>
                        </input>
                        <button type="submit" id={style.registerBoton}>Create User</button>
                        {errUserCreate && <p id={style.msgred}>Password not match </p>}
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
    );

}

export default Register;