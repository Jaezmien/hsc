declare enum Successful2XX {
    /**
     * The request succeeded.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
     */
    SUCCESS_OK_200 = 200,
    /**
     * The request succeeded, and a new resource was created as a result.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
     */
    SUCCESS_CREATED_201 = 201,
    /**
     * The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202}
     */
    SUCCESS_ACCEPTED_202 = 202,
    /**
     * This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203}
     */
    SUCCESS_NON_AUTHORITATIVE_INFORMATION_203 = 203,
    /**
     * There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
     */
    SUCCESS_NO_CONTENT_204 = 204,
    /**
     * Tells the user agent to reset the document which sent this request.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205}
     */
    SUCCESS_RESET_CONTENT_205 = 205,
    /**
     * This response code is used when the Range header is sent from the client to request only part of a resource.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206}
     */
    SUCCESS_PARTIAL_CONTENT_206 = 206,
    /**
     * Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207}
     */
    SUCCESS_MULTI_STATUS_207 = 207,
    /**
     * Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208}
     */
    SUCCESS_ALREADY_REPORTED_208 = 208,
    /**
     * The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226}
     */
    SUCCESS_IM_USED_226 = 226
}
export default Successful2XX;
