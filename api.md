# API

All API routes start with `/api`

## Public API

API routes used by the front-end

### `/keywords`

Get Watson-usable categories based on user query

**Method** GET

**Parameters** q=User search query `string`

**Returns** `string[]`

### `/events`

Get relevant events from Watson categories

**Method** POST

**Body** Event IDs, `string[]`

**Returns** Events, `object[]`

### `/events/:id`

Get event details

**Method** GET

**Parameters** id=Event ID

**Returns:** `Event`

### `/cal`

Generate iCal calendar for events

**Method** POST

**Body** Event IDs, `string[]`

**Returns**

- Calender file, `.iCal`
- Header `"Content-Type: text/calendar"`
- Header `"Content-Disposition: attachment; filename=events.ics"`

### `/github`

Query for relevant events using [Github's API](https://developer.github.com/v4/)

**Method** GET

**Parameters** username=Github username

**Returns:** Header "`Location: \<github sign-in page\>`"; redirects to `/github/callback`

## Internal API

### `/github/callback`

Request an [OAuth token](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#1-request-a-users-github-identity) for Github API

**Method** GET

**Parameters** code=Temporary code to request token
