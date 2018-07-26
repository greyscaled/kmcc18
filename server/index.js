/**
 * Copyright (C) 2018 Vapurrmaid - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @license
 * @author Grey Barkans <vapurrmaid@gmail.com>
 */

// eslint-disable-next-line no-unused-vars
const debug = require('debug')('kevin-marley-cc-2018:server:index')
// dependencies
const http = require('http')
// internals
const app = require('./app')
const ServerUtils = require('./utils/server-utils')

// dynamically bind port
const port = ServerUtils.normalizePort(process.env.PORT || 3553)
debug('Setting port: %d', port)
app.set('port', port)

// create the server and listen
const server = http.createServer(app)
server.listen(port, () => {
  debug(`listening on port ${server.address().port}`)
})
