import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useGuestRequest } from '../../hooks/useGuestRequest'
import { useSelectGuest } from '../../redux/guest/hooks'

import classes from './styles.module.css'

export const InvitePage: FC = () => {
  const location = useLocation();
  const regExp = /\/invite\/(\w*)/gi;
  const guestRequest = useGuestRequest();
  const guest = useSelectGuest();
  useEffect(() => {
    const regexpResult = regExp.exec(location.pathname)
    if (regexpResult != null) {
      guestRequest({ id: regexpResult[1] || '' })
    }
  })

  return (
    <div className={classes.content}>
      <div className={classes.title}>Привет, {guest?.name}!</div>
    </div>
  )
}
