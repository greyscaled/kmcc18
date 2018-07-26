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
const debug = require('debug')('kevin-marley-cc-2018:server:app.js')
// dependencies
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const RateLimit = require('express-rate-limit')

// /////////////////////////////////////////////////////////////////
// Express App Configuration
// /////////////////////////////////////////////////////////////////
const app = express()

// for use behind host proxy
app.enable('trust proxy')

// /////////////////////////////////////////////////////////////////
// Pre-Route Middleware
// /////////////////////////////////////////////////////////////////

// adds security headers
app.use(helmet())

// request rate limiter
app.use(new RateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10000, // 10K requests per 10 minutes
  delayMs: 0
}))

// /////////////////////////////////////////////////////////////////
// Routing
// /////////////////////////////////////////////////////////////////

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client', 'public', 'index.html'))
})

// /////////////////////////////////////////////////////////////////
// Post-Route Fallbacks
// /////////////////////////////////////////////////////////////////
module.exports = app
