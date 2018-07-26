/**
 * Copyright (C) 2018 Vapurrmaid - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @license
 * @author Grey Barkans <vapurrmaid@gmail.com>
 */

/**
 * Static utility class for http servers
 */
class ServerUtils {
  /**
   * Ensures a port is a named pipe or a 0+ integer
   * @oaram {string|number} port
   * @throws Will throw an error if port is not a
   * named pipe or integer value
   * @returns {string|number}
   */
  static normalizePort (port) {
    let normalized = parseInt(port, 10)
    if (isNaN(normalized) && typeof port === 'string') { // named pipe
      return port
    }

    if (normalized >= 0) { // integer port
      return normalized
    }

    // neither named or 0+ integer
    throw new Error(`provided port ${port} is not number or named pipe`)
  }
}

module.exports = ServerUtils
