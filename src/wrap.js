/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 * @provides wrap.auth
 * @requires fb.qs
 *           fb.frames
 *           fb.xd
 */

WRAP = {
  
  /**
   * Opens a popup to the authorization url, and sends the access token
   * to the callback when complete.
   *
   * @param {Function} cb  callback function accepts OAuth WRAP response
   */
  authorize: function(cb) {
      // create a url

    // callback handler
    var g = FB.guid();

    this._callback_url =
    FB.Frames.xdHandler(cb, g, "opener", true);
    
    var url = this._authorize_url +
    FB.QS.encode({wrap_client_id : this._client_id,
		  wrap_callback  : this._callback_url,
		  wrap_client_only : true});

    FB.Frames.popup(url, 450, 415, g);
  },

  init: function(params) {
    this._client_id         = params.client_id;
    this._client_secret     = params.client_secret;
    this._authorize_url     = params.authorize_url;
  },
  
  _client_id         : null,
  _client_secret     : null,
  _authorize_url     : null,
  _access_token_url  : null
};