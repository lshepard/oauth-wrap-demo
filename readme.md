OAuth WRAP JavaScript demo
===============================

[oauthwrap][OAuth WRAP] is a simpler, revised version of the [oauth][OAuth] protocol.
This project demonstrates how to use the protocol in a Javascript context.

[oauthwrap]: http://wiki.oauth.net/OAuth-WRAP
[oauth]: http://oauth.net/

How it works
------------

This library demonstrates how to use the experimental JavaScript profile
for OAuth WRAP. The code for OAuth WRAP authorization is contained entirely 
in the WRAP.authorize function. It relies on the cross-domain communication 
library provided by the [Facebook Connect JavaScript library][connect-js].

[connect-js]: http://github.com/facebook/connect-js

Tests
-----

The core pieces of the library are mostly tested using QUnit. To run the tests,
simply load ./tests/index.html.