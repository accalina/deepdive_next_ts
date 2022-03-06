import React from 'react'
import { useRouter } from 'next/router'
import UserInfo from '../../components/Userinfo'
import { NextPage } from 'next'

const Dashboard : NextPage = () => {
    const router = useRouter()
    const { username } = router.query
    return (
        <>
            <UserInfo username="accalina" isactive={true} pagename="kitten">
                <b> Hello { username } </b>
                <b>Hello World</b>
            </UserInfo>
        </>
    )
}

export default Dashboard
