import React from 'react'
import App from 'next/app'
import DefaultLayout from 'layouts/DefaultLayout'

export default class CustomApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render () {
		const { Component, pageProps } = this.props

		return (
			<DefaultLayout {...pageProps}>
				<Component {...pageProps} />
			</DefaultLayout>
		)
	}
}