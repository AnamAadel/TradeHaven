import React from 'react'
import CommonHero from '../shared/CommonHero'
import AccountArea from './components/AccountArea'

function Account() {
  return (
    <>
      <CommonHero PageName={"Account"} />
      <AccountArea />
    </>
  )
}

export default Account