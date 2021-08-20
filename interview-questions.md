# Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

Tokens are client side and are passed with requests to the server. The server inspects the tokens to authenticate and authorize user and user activity.
Sessions are more efficient because they're managed server-side. The session validates a client login and tracks the session in a database; when the client communicates with the server, it is verified and authorized.

2. What does `bcryptjs` do to help us store passwords in a secure manner?

Bcrypt does cool cyber security stuff by hashing passwords multiple times, and salting. These layers of encryption makes it tougher for an attacker to access sensitive information.

3. How are unit tests different from integration and end-to-end testing?

Unit is checking individual parts are working. Integration is testing a feature's interactions and compatibility with other features or programs. End-to-end is the whole enchilada.

4. How does _Test Driven Development_ change the way we write applications and tests?

I've never met a developer who likes TDD, but we all understand why it's necessary. Bite-sized testing from the beginning > trying to test everything at once farther into development. Generally keeps all the moving parts stronger and more deliberate. 