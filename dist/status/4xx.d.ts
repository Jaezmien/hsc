declare enum Client4XX {
    /**
     * The server cannot or will not process the request due to something that is perceived to be a client error
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
     */
    CLIENT_BAD_REQUEST_400 = 400,
    /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
     */
    CLIENT_UNAUTHORIZED_401 = 401,
    /**
     * This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402}
     */
    CLIENT_PAYMENT_REQUIRED_402 = 402,
    /**
     * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
     */
    CLIENT_FORBIDDEN_403 = 403,
    /**
     * The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
     */
    CLIENT_NOT_FOUND_404 = 404,
    /**
     * The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
     */
    CLIENT_METHOD_NOT_ALLOWED_405 = 405,
    /**
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406}
     */
    CLIENT_NOT_ACCEPTABLE_406 = 406,
    /**
     * This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407}
     */
    CLIENT_PROXY_AUTHENTICATION_FAILED_407 = 407,
    /**
     * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408}
     */
    CLIENT_REQUEST_TIMEOUT_408 = 408,
    /**
     * This response is sent when a request conflicts with the current state of the server.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409}
     */
    CLIENT_CONFLICT_409 = 409,
    /**
     * This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services".
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410}
     */
    CLIENT_GONE_410 = 410,
    /**
     * Server rejected the request because the Content-Length header field is not defined and the server requires it.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411}
     */
    CLIENT_LENGTH_REQUIRED_411 = 411,
    /**
     * The client has indicated preconditions in its headers which the server does not meet.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412}
     */
    CLIENT_PRECONDITION_FAILED_412 = 412,
    /**
     * Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413}
     */
    CLIENT_PAYLOAD_TOO_LARGE_413 = 413,
    /**
     * The URI requested by the client is longer than the server is willing to interpret.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414}
     */
    CLIENT_URI_TOO_LONG_414 = 414,
    /**
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415}
     */
    CLIENT_UNSUPPORTED_MEDIA_TYPE_415 = 415,
    /**
     * The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416}
     */
    CLIENT_RANGE_NOT_SATISFIABLE_416 = 416,
    /**
     * This response code means the expectation indicated by the Expect request header field cannot be met by the server
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417}
     */
    CLIENT_EXPECTATION_FAILED_417 = 417,
    /**
     * The server refuses the attempt to brew coffee with a teapot.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418}
     */
    CLIENT_IM_A_TEPOT_418 = 418,
    /**
     * The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421}
     */
    CLIENT_MISDIRECTED_REQUSET_421 = 421,
    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422}
     */
    CLIENT_UNPROCESSABLE_CONTENT_422 = 422,
    /**
     * The resource that is being accessed is locked.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423}
     */
    CLIENT_LOCKED_423 = 423,
    /**
     * The request failed due to failure of a previous request.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424}
     */
    CLIENT_FAILED_DEPENDENCY_424 = 424,
    /**
     * Indicates that the server is unwilling to risk processing a request that might be replayed.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425}
     */
    CLIENT_TOO_EARLY_425 = 425,
    /**
     * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426}
     */
    CLIENT_UPGRADE_REQUIRED_426 = 426,
    /**
     * The origin server requires the request to be conditional.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428}
     */
    CLIENT_PRECONDITION_REQUIRED_428 = 428,
    /**
     * The user has sent too many requests in a given amount of time ("rate limiting").
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429}
     */
    CLIENT_TOO_MANY_REQUESTS_429 = 429,
    /**
     * The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431}
     */
    CLIENT_REQUEST_HEADER_FIELDS_TOO_LARGE_431 = 431,
    /**
     * The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451}
     */
    CLIENT_UNAVAILABLE_FOR_LEGAL_REASONS_451 = 451
}
export default Client4XX;
