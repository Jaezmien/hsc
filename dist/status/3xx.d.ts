declare enum Redirection3XX {
    /**
     * The request has more than one possible response. The user agent or user should choose one of them.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300}
     */
    REDIRECTION_MULTIPLE_CHOICES_300 = 300,
    /**
     * The URL of the requested resource has been changed permanently. The new URL is given in the response.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301}
     */
    REDIRECTION_MOVED_PERMANENTLY_301 = 301,
    /**
     * This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302}
     */
    REDIRECTION_FOUND_302 = 302,
    /**
     * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303}
     */
    REDIRECTION_SEE_OTHER_303 = 303,
    /**
     * This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304}
     */
    REDIRECTION_NOT_MODIFIED_304 = 304,
    /**
     * Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy.
     *
     * @deprecated It has been deprecated due to security concerns regarding in-band configuration of a proxy.
     */
    REDIRECTION_USE_PROXY_305 = 305,
    /**
     * This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.
     */
    REDIRECTION_UNUSED_306 = 306,
    /**
     * The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307}
     */
    REDIRECTION_TEMPORARY_REDIRECT_307 = 307,
    /**
     *  This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308}
     */
    REDIRECTION_PERMANENT_REDIRECT_308 = 308
}
export default Redirection3XX;
