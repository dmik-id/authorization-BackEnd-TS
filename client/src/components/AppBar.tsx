import React from "react";
import { AppBar, Button, Container, Link } from "@material-ui/core";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, USERLIST_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "../index";
import { IUser } from "../models/IUser";
export{}


const Appbar:FC = () =>{

    const { store } = useContext(Context);

    const logOut = () => {
        let user = {} as IUser;
        store.setUser(user)
        store.setAuth(false)
    }

    return(

        <Container>

            <AppBar  position="static">
                <Link href={LANDING_ROUTE} color="inherit">
                    Landing

                </Link>

                <Link href={USERLIST_ROUTE} color="inherit">
                    Userlist

                </Link>
                
                <Link href={ADMIN_ROUTE} color="inherit">
                    AdminPage

                </Link>


                <Button
                onClick={() => store.logout()}
                >
                {store.isAuth ? 'Sign Out' 
                : 
                <Link href = {LOGIN_ROUTE} color="inherit">Authorization</Link>}
                </Button>
            </AppBar>
        </Container>
    )
}
export default observer(Appbar)



