const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())

const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
// next.config.js
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')

module.exports = withCss(withLess({
	exportPathMap(defaultPathMap) {
		defaultPathMap['/404.html'] = defaultPathMap['/404']
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
