# API

All API routes start with `/api`.

| Route     | Method | Parameters        | Returns                  | Format     |
| --------- | ------ | ----------------- | ------------------------ | ---------- |
| `/events` | GET    |                   | All event IDs            | `string[]` |
|           | GET    | `:id` Event ID    | Event information        | `event`    |
| `/search` | GET    | `:q` Search query | Any related events found | `event[]`  |
