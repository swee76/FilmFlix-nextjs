import Head from 'next/head'
import {AppProps} from 'next/app'
import '../styles/index.css'
import {store} from '../store'
import {Provider} from 'react-redux'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>NextJS TailwindCSS TypeScript Starter</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp