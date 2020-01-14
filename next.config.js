const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())

const isProd = process.env.NODE_ENV === 'production'
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
// next.config.js
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')

module.exports = withCss(withLess({
	// assetPrefix: isProd ? '/rengarch' : '',
	exportPathMap(defaultPathMap, { dev }) {
		if (dev) {
			return defaultPathMap
		}
		delete defaultPathMap['/projects/detail']
		delete defaultPathMap['/art/detail']
		defaultPathMap['/404.html'] = defaultPathMap['/404']
		defaultPathMap['/projects/fengshiguangju.html'] = { page: '/projects/detail', query: { name: 'fengshiguangju' }}
		defaultPathMap['/projects/cfa.html'] = { page: '/projects/detail', query: { name: 'cfa' }}
		defaultPathMap['/projects/xiaoyin.html'] = { page: '/projects/detail', query: { name: 'xiaoyin' }}
		defaultPathMap['/projects/bonus.html'] = { page: '/projects/detail', query: { name: 'bonus' }}
		// defaultPathMap['/projects/silk-road.html'] = { page: '/projects/detail', query: { name: 'silk-road' }}
		defaultPathMap['/projects/red.html'] = { page: '/projects/detail', query: { name: 'red' }}
		defaultPathMap['/projects/dian.html'] = { page: '/projects/detail', query: { name: 'dian' }}
		defaultPathMap['/art/brick-seat.html'] = { page: '/art/detail', query: { name: 'brick-seat' }}
		defaultPathMap['/art/mo.html'] = { page: '/art/detail', query: { name: 'mo' }}
		return defaultPathMap
	},
	webpack(config, options) {
		config.resolve.alias.layouts = resolveApp('layouts')
		config.resolve.alias.components = resolveApp('components')
		config.resolve.alias.assets = resolveApp('assets')
		config.resolve.alias.utils = resolveApp('utils')
		return config
	}
}))
