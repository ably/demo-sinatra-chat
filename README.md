### Ably Chat with server-side built in Sinatra example

This chat app demo demonstrates the use [Ably (simply better realtime)](https://www.ably.io) to:

* Authenticate using token authentication URLs with identified clients
* Using presence
* Using connection state events

**Note: This demo is incomplete and is a work-in-progress**

### To run the demo

- `bundle install`
- `ruby ./app.rb`
- Open http://localhost:4567 with a browser and add a nickname
- Open http://localhost:4567 on another browser window, add a nickname and verify the presence of the previous nickname.

### Ably

[https://www.ably.io](https://www.ably.io)
