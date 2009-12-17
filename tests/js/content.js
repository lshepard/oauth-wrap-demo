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
 */
////////////////////////////////////////////////////////////////////////////////
module('content');
////////////////////////////////////////////////////////////////////////////////

test(
  'append some HTML markup',

  function() {
    var html = '<div id="test-div">test div</div>';
    var div = FB.Content.append(html);
    ok(div.firstChild.id == 'test-div',
       'expect the correct id back in the first child');
    ok(document.getElementById('test-div'), 'expect it to be in the DOM');
    ok(document.getElementById('test-div').innerHTML == 'test div',
       'expect the correct inner html');
    div.parentNode.removeChild(div);
  }
);

test(
  'append a node',

  function() {
    var div = document.createElement('div');
    div.id = 'test-div';
    div.innerHTML = 'test div';
    var returnedDiv = FB.Content.append(div);
    ok(returnedDiv.id == 'test-div', 'expect the correct id back');
    ok(document.getElementById('test-div'), 'expect it to be in the DOM');
    ok(document.getElementById('test-div').innerHTML == 'test div',
       'expect the correct inner html');
    returnedDiv.parentNode.removeChild(returnedDiv);
  }
);

test(
  'append a node with custom root',

  function() {
    var root = document.createElement('div');
    var div = document.createElement('div');
    div.id = 'test-div';
    div.innerHTML = 'test div';
    var returnedDiv = FB.Content.append(div, root);
    ok(returnedDiv.id == 'test-div', 'expect the correct id back');
    ok(root.firstChild.id == 'test-div',
       'expect the correct id back in the firstChild');
  }
);

test(
  'append some hidden HTML markup',

  function() {
    var html = '<div id="test-div">test div</div>';
    var div = FB.Content.appendHidden(html);
    ok(div.firstChild.id == 'test-div',
       'expect the correct id back in the first child');
    ok(document.getElementById('test-div'), 'expect it to be in the DOM');
    ok(document.getElementById('test-div').innerHTML == 'test div',
       'expect the correct inner html');
    div.parentNode.removeChild(div);
  }
);

test(
  'iframe onload handler',

  function() {
    expect(1);
    stop();

    // doesnt really matter as long as the host will respond
    var
      url = 'http://static.ak.fbcdn.net/connect/xd_proxy.php',
      root = document.getElementById('fb-root'),
      onload = function(node) {
        ok(true, 'onload callback was invoked');
        node.parentNode.removeChild(node);
        start();
      };
    FB.Content.insertIframe(url, root, onload);
  }
);
