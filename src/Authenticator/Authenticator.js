import "./Authenticator.css";
import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Authenticator = () => {
    const [logged, setLogged] = useState(false);
    const clientId = "912370056810-a5aiv69oq2l37jcbekrpjejn70b4dse0.apps.googleusercontent.com";

    function successLogin(credentialResponse) {
        console.log(credentialResponse);
        setLogged(true);
    }

    function renderLoginPanel() {
        return (
            !logged && (
                <section>
                    <strong className="Title">Entrar</strong>

                    <nav className="ButtonLogin">
                        <GoogleLogin
                            buttonText="Entrar com Google"
                            onSuccess={successLogin}
                            onError={() => {
                                console.log("Falha no login");
                                setLogged(false);
                            }}
                        />
                    </nav>
                </section>
            )
        );
    }

    function renderPageLogged() {
        return (
            <>
                <h1> Logado com sucesso</h1>
            </>
        );
    }

    return (
        <div className="AuthenticatorPainel">
            <GoogleOAuthProvider clientId={clientId}>
                {!logged && renderLoginPanel()}

                {logged && renderPageLogged()}
            </GoogleOAuthProvider>
        </div>
    );
};

export default Authenticator;
