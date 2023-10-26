import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import { ContextProvider } from '../AuthContext/AuthProvider';

const ProtectRoute = ({children}) => {
    const { user, loader} = useContext(ContextProvider);
    const location =useLocation();

    if(loader){
        <span className="loading loading-spinner text-center justify-center align-middle loading-lg"></span>;
    }

    if(user){
      return  children
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

ProtectRoute.propTypes={
    children:PropTypes.node
}

export default ProtectRoute;