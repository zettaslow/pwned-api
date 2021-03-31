# pwned-api

A proof of concept API that can poll the haveibeenpwned.com API to gather account breach data when passed an email address via GET request

Built using Express, TypeScript, and Axios

## Instructions for startup

- Create a `.env` file and set the following values

```env
PORT=4000
HIBP_API_KEY=<Your Key Goes Here>
```
- `npm install` for dependencies
- Then run `npm run start` to start the backend application
