import Informational1XX from './status/1xx'
import Successful2XX from './status/2xx'
import Redirection3XX from './status/3xx'
import Client4XX from './status/4xx'
import Server5XX from './status/5xx'

/**
 * HTTP Status Codes
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 */
const StatusCode = {
	...Informational1XX,
	...Successful2XX,
	...Redirection3XX,
	...Client4XX,
	...Server5XX,
}

export default StatusCode
