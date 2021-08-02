### Ably Chat with server-side built in Sinatra example

_[Ably](https://ably.com) is the platform that powers synchronized digital experiences in realtime. Whether attending an event in a virtual venue, receiving realtime financial information, or monitoring live car performance data – consumers simply expect realtime digital experiences as standard. Ably provides a suite of APIs to build, extend, and deliver powerful digital experiences in realtime for more than 250 million devices across 80 countries each month. Organizations like Bloomberg, HubSpot, Verizon, and Hopin depend on Ably’s platform to offload the growing complexity of business-critical realtime data synchronization at global scale. For more information, see the [Ably documentation](https://ably.com/documentation)._

This chat app demo demonstrates the use of Ably to:

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
