# Security and privacy

## Public information policy

This repository must never contain personal email addresses, phone numbers,
home addresses, government identifiers, private client information, credentials,
API keys, or unredacted résumé documents.

## Contact flow

The browser must display only a masked address. The real destination address
belongs in the server-side configuration of the contact service and must never
be returned to the client.

The production contact endpoint should implement:

- server-side input validation;
- rate limiting;
- a honeypot and Cloudflare Turnstile;
- strict CORS rules;
- generic success and error responses;
- minimal logs and a retention policy.

## Reporting

Use GitHub's private vulnerability reporting feature when enabled. Do not open
a public issue containing sensitive information.
