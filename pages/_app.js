import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Cookie from 'js-cookie';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
import withData from '../lib/apollo';
import AppContext from '../context/AppContext';

class MyApp extends App {

    state = {
        user: null,
    };

    componentDidMount() {
        const token = Cookie.get('token');

        if (token) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(async (res) => {
                if (!res.ok) {
                    Cookie.remove('token');
                    this.setState({ user: null });
                    return null;
                }
                const user = await res.json();
                this.setUser(user);
            });
        }
    }

    setUser = (user) => {
        this.setState({ user });
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <AppContext.Provider
                value={{
                    user: this.state.user,
                    isAuthenticated: !!this.state.user,
                    setUser: this.setUser,
                }}
            >
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        integrity="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        crossOrigin="anonymous"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContext.Provider>
        );
    }
}

export default withData(MyApp);