import React from 'react'

type userInfoProps = {
    username? : string
    isactive? : boolean
    pagename? : string
}

const UserInfo : React.FunctionComponent<userInfoProps> = (props) => {
    return (
        <>
            <p>Username: {props.username}</p>
            <p>IsActive: {props.isactive?.toString()}</p>
            <p>Pages: {props.pagename}</p>
            {props.children}
        </>
    )
}

export default UserInfo