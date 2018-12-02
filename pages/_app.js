import React from 'react'
import App from 'next/app'
import Mask from 'components/Mask'
import DefaultLayout from 'layouts/DefaultLayout'

export default class CustomApp extends App {
	constructor (props) {
		super(props)
		this.state = {
			visible: true
		}
		const timeId = setTimeout(() => {
			this.setState({ visible: false })
			clearTimeout(timeId)
		}, 2000)
	}
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}

	render () {
		const { Component, pageProps } = this.props
		const { visible } = this.state

		return (
			<DefaultLayout {...pageProps}>
				{
					visible && <Mask/>
				}
				<Component {...pageProps} />
			</DefaultLayout>
		)
	}
}