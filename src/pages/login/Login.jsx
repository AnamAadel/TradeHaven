import React, { useRef, useState } from 'react';

import { useAuth } from '../../context/AuthProvider';

function Login() {
    const {signInWithGoogle, signInUser , isShowLogin, setIsShowLogin} = useAuth();
    const captchaInput = useRef(null);
    const [isDisabled, setIsDisabled] = useState(true)

    let showModal = isShowLogin ? {paddingRight: "15px", display: "block", pointerEvents: "all"} : null

    // const handleCaptcha = ()=> {
    //     if(captchaInput.current.value.length === 6){
    //         if(validateCaptcha(captchaInput.current.value)){
    //             console.log("captcha is", false)
    //             setIsDisabled(false)
    //         }else{
    //             console.log("captcha is", true)
    //             setIsDisabled(true)
    //         }
            
    //     }else{
    //         console.log("captcha is", true)
    //         setIsDisabled(true)
    //     }
    // }

    // useEffect(()=> {
    //     loadCaptchaEnginge(6)
    // },[])
    
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm()

    // const handleGoogleSignIn = ()=> {
    //     signInWithGoogle().then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    // const handleSignInUser = (data)=> {
    //     console.log(data)
    //     signInUser(data.email, data.password).then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }


    return (
        <div className={`modal popup-login-style ${isShowLogin ? "show" : null}`} id="loginActive" style={showModal}>
        <button type="button" className="close-btn" data-bs-dismiss="modal" onClick={()=> setIsShowLogin()}><span aria-hidden="true">&times;</span></button>
        <div className="modal-overlay">
            <div className="modal-dialog p-0" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="login-content">
                            <h2>Log in</h2>
                            <h3>Log in your account</h3>
                            <form action="#">
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <div className="remember-forget-wrap">
                                    <div className="remember-wrap">
                                        <input type="checkbox" />
                                        <p>Remember</p>
                                        <span className="checkmark"></span>
                                    </div>
                                    <div className="forget-wrap">
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                </div>
                                <button type="button">Log in</button>
                                <div className="member-register">
                                    <p> Not a member? <a href="login.html"> Register now</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login