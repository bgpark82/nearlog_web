import React, { useState } from 'react'

const login = () => {

    const [email, setEmail] = useState('');

    const onChangeInput = (e) => {}

    return (
        <form>
            <input type="text" value={email} onChange={onChangeInput}/>
            <input type="password"/>
            <input type="button" value="로그인"/>
        </form>
    )
}

export default login
