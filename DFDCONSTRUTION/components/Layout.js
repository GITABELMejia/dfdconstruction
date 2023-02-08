import Navbar from './Navbar'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nprogress from 'nprogress';

const Layout = ({ children, footer = true }) => {

    const router = useRouter()

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
            Nprogress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => Nprogress.done())

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <div className='header'>
            <Navbar />
            <main className=''>
                {children}
            </main>
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Abel Mejia Pinto Porta Folio </h1>
                            <p>2000 - {new Date().getFullYear()}</p>
                            <p>All rights Reserverd</p>
                        </div>
                    </footer>
                )
            }

        </div>
    )

}

export default Layout;