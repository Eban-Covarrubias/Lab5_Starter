# Lab 5 - Starter
Eban Covarrubias
[https://eban-covarrubias.github.io/Lab5_Starter/expose.html
](https://eban-covarrubias.github.io/Lab5_Starter/expose.html)

[https://eban-covarrubias.github.io/Lab5_Starter/explore.html
](https://eban-covarrubias.github.io/Lab5_Starter/explore.html)

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, I would not use a unit test for this kind of feature because unit tests are not designed for testing features that go through multiple aspects of the software. In this case a message being sent would be much more complex since it requires both frontend and backend, other tests would be much more suitable.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, this would be approriate because testing the amount of characters that can be typed into a text box is a small scale test that a unit test would be perfect for. It can be tested in isolation unlike the previous example.
