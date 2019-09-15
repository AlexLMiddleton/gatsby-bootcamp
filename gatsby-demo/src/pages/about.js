import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
            <Layout>      
                <Head title="About" />
                <h1>About Me</h1>
                <h2>Alex is dating a sexy woman named Kristin.  That's all you need to know.</h2>
                <h3>She has nice boobies.</h3>
                <Link to="/contact">Contact me.</Link>
            </Layout>
    )
}

export default AboutPage