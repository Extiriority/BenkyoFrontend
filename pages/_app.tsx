import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout"
import {appWithTranslation} from "next-i18next";
import {Component} from "react";
import nextI18NextConfig from '../next-i18next.config.js';
import {Provider} from "react-redux";
import store, {set} from "../src/UserStore";
import {getSelf} from "../src/User";
import Head from "next/head";
import {QueryClient, QueryClientProvider} from "react-query";

getSelf().then((user) => store.dispatch(set(user)))
    .catch(() => {
    })

const queryClient = new QueryClient()

function Benkyo({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Benkyo</title>
                <link rel={"shortcut icon"} type={"image/svg"} href={"/logo.svg"}/>

                <meta name={"viewport"} content={"width=device-width, initial-scale=1.0, user-scalable=no"}/>

                {/*TODO: Localize and edit descriptions (based on the page too)*/}
                <meta name={"description"} content={"Benkyo is a platform for learning languages."}/>

                <meta property={"og:title"} content={"Benkyo"}/>
                <meta property={"og:description"} content={"Benkyo is a platform for learning languages."}/>
                <meta property={"og:site_name"} content={"Benkyo"}/>
                <meta property={"og:url"} content={""}/>
                <meta property={"og:site_name"} content={"Benkyo"}/>
                <meta property={"og:keywords"}
                      content={"Benkyo,Learn,Study,Memorize,Memorise,SRS,Spaced repetition system,Memrise,Anki"}/>
                <meta property={"og:image"} content={"logo.svg"}/>

                <meta property={"twitter:card"} content={"summary_large_image"}/>
                <meta property={"twitter:site"} content={"@AmyFoxieh"}/>
                <meta property={"twitter:site:id"} content={"@AmyFoxieh"}/>
                <meta property={"twitter:creator"} content={"@AmyFoxieh"}/>
                <meta property={"twitter:creator:id"} content={"@AmyFoxieh"}/>
                <meta property={"twitter:image"} content={"/logo.svg"}/>
            </Head>

            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </QueryClientProvider>
            </Provider>
        </>
    )
}

export default appWithTranslation(Benkyo, nextI18NextConfig)
