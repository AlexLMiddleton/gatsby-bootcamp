import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>This is a contact form.</h1>
                <a href="http://www.twitter.com" target="_blank">Follow me on Twitter</a>
            </Layout>
        </div>
    )
}

export default ContactPage