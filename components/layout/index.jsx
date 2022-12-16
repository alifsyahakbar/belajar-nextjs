import { React } from 'react'
import Header from '../header'

export default function Layout({children}) {
  return (
    <>
        <Header></Header>
        <div className='container mx-auto'>{children}</div>
    </>
  )
}
