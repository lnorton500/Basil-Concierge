# API

All API routes start with `/api` and use method `GET`.

## `/events`

**/** Get event IDs

| Parameter | Description            | Type  | Default |
| --------- | ---------------------- | ----- | ------- |
| limit=    | Max number of IDs      | `int` | 25      |
| skip=     | Skip first 'n' results | `int` | 0       |

Returns: `string[]`

**`/:id`** Get event information

| Parameter | Description | Type     |
| --------- | ----------- | -------- |
| :id       | Event ID    | `string` |

Returns: `Event`

## `/cal`

**`/`** Generate iCal calendar for events

| Parameter | Description       | Type                       | Default |
| --------- | ----------------- | -------------------------- | ------- |
| ids=      | List of event IDs | `string[]` comma-separated | none    |

Returns: calender file, `.iCal`

## `/github`

**`/`** Query for relevant events using Github's [API](https://developer.github.com/v4/)

| Parameter | Description            | Type     |
| --------- | ---------------------- | -------- |
| username= | User's Github username | `string` |

Returns: `Location` response header to Github sign-in page

**`/callback`** Github sign-in redirect to [request OAuth token](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#1-request-a-users-github-identity)

| Parameter | Description                    | Type     |
| --------- | ------------------------------ | -------- |
| code=     | Temporary code for OAuth token | `string` |

Returns: keywords from user's repositories, `string[]`
