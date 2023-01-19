import Link from 'next/link';
import style from '../../styles/MenuPage.module.css';
import { AuthContext } from '../../context/auth.context';
import { useContext } from "react";

import arrow from '../../public/assets/arrow.png';
import Image from 'next/image';

const Menu = () => {
    const { logOut, user } = useContext(AuthContext);
    return (
        <>
            <div className={style.menupagecontainer}>
                {user && <h1>User: {user.email}</h1>}
                <Link href={'/user/wishList'}>
                    <div className={style.menulink}>My wishList
                        <Image
                            width={8}
                            src={arrow}
                            alt="arrow.png" />
                    </div>
                </Link>
                <Link href={'/user/catalog'}>
                    <div className={style.menulink}>Catalog
                        <Image
                            width={8}
                            src={arrow}
                            alt="arrow.png" />
                    </div>
                </Link>
                <Link href={'/user/shop'}>
                    <div className={style.menulink}>My Shop
                        <Image
                            width={8}
                            src={arrow}
                            alt="arrow.png" />
                    </div>
                </Link>
                {
                    user ?
                        <>
                            <Link href={'/'} onClick={logOut}>
                                <div className={style.menulink}>Logout
                                    <Image
                                        width={8}
                                        src={arrow}
                                        alt="arrow.png" />
                                </div>
                            </Link>
                        </>
                        :
                        <Link href={'/registerLogin'}>
                            <div className={style.menulink}>Login
                                <Image
                                    width={8}
                                    src={arrow}
                                    alt="arrow.png" />
                            </div>
                        </Link>
                }
            </div>
        </>
    );

}

export default Menu;