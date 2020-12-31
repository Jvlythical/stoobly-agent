# Scenarios Mock API

Mock API and/or proxy for a HTTP service. Uses scenarios-backend to retrieve mocked responses or proxies requests to actual service.

## Getting Started

* Copy config/env.yml.sample to config/env.yml

* Edit as needed

## Configuration

#### api_key

Scenarios API key found under user settings.

#### project_id

Scenarios project id found uner project settings.

#### scenarios_url

Scenarios API URL 

```
e.g. https://scenarios-scenarios-staging-rwba73bphq-uw.a.run.app
```

#### service_url (optional)

URL of the service to proxy requests to. Only set this if proxying requests that are not yet uploaded is desired.
For example, when a new project is created, any request received will not have been uploaded. Setting a service 
URL enables proxying the request to the service. Depending on your `upload_policy`, the request may be uploaded.

```
e.g. http://localhost:3000
```

#### upload_policy

* *default*: requests will always be sent to `service_url` and then uploaded to scenarios API.

* *not_found*: requests will be sent to scenarios API and if no response is found, each request will be proxied to `service_url`.
If a response is sucessfully received (regardless of status code), the request and response will be uploaded to scenarios URL.

## Usage

```
rails s
```

