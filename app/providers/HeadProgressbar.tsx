import { FC, useEffect } from 'react'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'

export const HeadProgressBar: any = () => {
	NProgress.configure({ easing: 'ease', speed: 700 })

	useEffect(() => {
		const handleRouteStart = () => NProgress.start()
		const handleRouteDone = () => NProgress.done()

		Router.events.on('routeChangeStart', handleRouteStart)
		Router.events.on('routeChangeComplete', handleRouteDone)
		Router.events.on('routeChangeError', handleRouteDone)

		return () => {
			// Make sure to remove the event handler on unmount!
			Router.events.off('routeChangeStart', handleRouteStart)
			Router.events.off('routeChangeComplete', handleRouteDone)
			Router.events.off('routeChangeError', handleRouteDone)
		}
	}, [])
}
