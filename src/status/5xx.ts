enum Server5XX {
	/**
	 * The server has encountered a situation it does not know how to handle.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500}
	 */
	SERVER_INTERNAL_SERVER_ERROR_500 = 500,

	/**
	 * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501}
	 */
	SERVER_NOT_IMPLEMENTED_501 = 501,

	/**
	 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502}
	 */
	SERVER_BAD_GATEWAY_502 = 502,

	/**
	 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503}
	 */
	SERVER_SERVICE_UNAVAILABLE_503 = 503,

	/**
	 * This error response is given when the server is acting as a gateway and cannot get a response in time.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504}
	 */
	SERVER_GATEWAY_TIMEOUT_504 = 504,

	/**
	 * The HTTP version used in the request is not supported by the server.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505}
	 */
	SERVER_HTTP_VERSION_NOT_SUPPORTED_505 = 505,

	/**
	 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506}
	 */
	SERVER_VARIANT_ALSO_NEGOTIATES_506 = 506,

	/**
	 * The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507}
	 */
	SERVER_INSUFFICIENT_STORAGE_507 = 507,

	/**
	 * The server detected an infinite loop while processing the request.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508}
	 */
	SERVER_LOOP_DETECTED_508 = 508,

	/**
	 * Further extensions to the request are required for the server to fulfill it.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510}
	 */
	SERVER_NOT_EXTENDED_510 = 510,

	/**
	 * Indicates that the client needs to authenticate to gain network access.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511}
	 */
	SERVER_NETWORK_AUTHENTICATION_FAILED_511 = 511,
}

export default Server5XX
