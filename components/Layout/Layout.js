import React from 'react'
import { NextSeo } from "next-seo";
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {

    return (
        <>
            <NextSeo
                title="Snubes"
                titleTemplate="Snubes"
                defaultTitle="Snubes"
                description="Successful Call Center Outsourcing Made Easy"
                canonical="https://snubes.com/"
                openGraph={{
                    url: "https://snubes.com/",
                    title: "Snubes",
                    description: "Successful Call Center Outsourcing Made Easy",
                    images: [
                        {
                            url: "images/components/Navbar/snubes-logo.svg",
                            width: 800,
                            height: 420,
                            alt: "Snubes",
                        },
                    ],
                }}
            />
            <Header />
            <main id="layout">
                <>
                    {children}
                </>
            </main>
            {/* <Footer /> */}
        </>
    )
}