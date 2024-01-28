declare enum Informational1XX {
    /**
     * This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100}
     */
    INFORMATIONAL_CONTINUE_100 = 100,
    /**
     * This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101}
     */
    INFORMATIONAL_SWITCHING_PROTOCOLS_101 = 101,
    /**
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102}
     */
    INFORMATIONAL_PROCESSING_102 = 102,
    /**
     * This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response or preconnect to an origin from which the page will need resources.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103}
     */
    INFORMATIONAL_EARLY_HINTS_103 = 103
}
export default Informational1XX;
