# API

All API routes start with `/api`, use method GET, and return JSON.

## Public API

API routes used by the front-end for data acquisition

### `/categories`

Get Watson-usable categories based on user query

**Parameters**

- q=User search query `string`
- code=temporary OAuth code to request an [OAuth token](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#1-request-a-users-github-identity) for Github API

**Returns** `string[]`

### `/events`

Get relevant events from Watson categories

**Parameters** q=Watson categories (comma-separated)

**Returns** Event IDs with relevance score, `object[]`

### `/events/:id`

Get event details

**Parameters** id=Event ID

**Returns:** `Event`

### `/cal`

Generate iCal calendar for events

**Parameters** ids=Event IDs (comma-separated)

**Returns**

- Calender file, `.iCal`
- Header `"Content-Type: text/calendar"`
- Header `"Content-Disposition: attachment; filename=events.ics"`

### `/reading/id`

Get reading links by ID

**Returns** Links, `string[]`

### `/github`

Query for relevant events using [Github's API](https://developer.github.com/v4/)

**Parameters** username=Github username

**Returns** Header "`Location: \<github sign-in page\>`"; redirects to front-end host domain
