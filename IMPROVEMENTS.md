## What I would do to make production ready
#### Additional forms of testing
- More unit tests on the components to validate their behaviour
- Integration tests on pages and large components to ensure the application works as expected
#### Lack of lint rules
- Enforce stricter coding rules to improve code quality
- Remove duplication in components
#### Better use of logging
- Use logs to give an understanding of the application behaviour, particularly on network calls
- Store events and logs to a centralised (Logstash, Cloudwatch etc)
#### Improved error handling
- When there are errors in the application, it would be good also to collect the errors and have alerting when they occurs (incorporate Sentry, Cloudwatch etc)
- Display to the user when errors occur
- Handle the various different errors better, both user input and API errors
