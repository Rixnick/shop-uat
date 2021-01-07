import React from 'react';
import FacebookLogin from 'react-facebook-login'

const facebook = () => {
    const signUserIn = async response => {
        const { name, email, accessToken, userID } =response;
        const user = { name, email, accessToken, userId: userID  }

        await axios({
            method:'post',
            url:`http://localhost:5000/signin/facebook`,
            data: {
                user
            }
        })
    }
    
    return (
        <div>
            <h1>Facebook Login page</h1>
            <FacebookLogin
                appId='396507744902325'
                fields='name,email'
                scope='public_profile, email'
                callback={signUserIn}
            />
        </div>
    )
}

export default facebook
