import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const IsPrivate = (props) => {
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <>Loading...</>
    }

    if (isLoggedIn) {
        return props.children;
    } else {
        return <Navigate to='/RegisterLogin' />
    }
}

export default IsPrivate;