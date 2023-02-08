import 'bootswatch/dist/cosmo/bootstrap.min.css'
import'../global.css'

import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {

    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap')
    },[]);


    return <Component {...pageProps} />
}