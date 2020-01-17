# Demo

## Backend

Progress tracked with Kanban board on [Trello](https://trello.com/b/T1cg5uiq/ibm-backend)

### Dataset

- [FOSDEM 2020](https://fosdem.org/2020/schedule/), conference on free and open-source software
- Schedule available as XML in 'Pentabarf' schema
- Designed and [documented](https://github.com/lnorton500/Basil-Concierge/blob/master/data-structures.md) event object
- Converted to JSON and restructured using [script](https://github.com/lnorton500/Basil-Concierge/blob/master/backend/conference-data/parse.js)
- Setup authentication with API key for Cloudant, IBM service using CouchDB
- Inserted with [script](https://github.com/lnorton500/Basil-Concierge/blob/master/backend/conference-data/insert.js)

* Later changed to Watson Discovery data which uses Discovery Query Language

### API

- Node Red hosted by [express](https://expressjs.com), most popular web framework for NodeJS
- HTTP nodes closely resembles express so easy to pickup
- Progressively designed and [documented](https://github.com/lnorton500/Basil-Concierge/blob/master/api.md)
- Tested using superagent, a HTTP request library; and jest, a testing framework
- Each route is [tested separately](https://github.com/lnorton500/Basil-Concierge/tree/master/backend/api-tests)

### Github Integration

- Allows user to query for events related to repo info - languages &topics
- Uses Github API V4, queried using [GraphQL](https://developer.github.com/v4/explorer/): object-based query language
- Authenticated with OAuth

### Calendar Generation

- Provides [iCal file](https://github.com/lnorton500/Basil-Concierge/tree/master/events.ics) from user-selected events
- Event data is formatted and parsed into iCal syntax
- Automatically downloaded using `Content-Disposition` header
