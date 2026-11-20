Feature: F1 Greeting

  @story-F1.1
  Rule: The app shows the fixed message "Hello, World!"

    Scenario: Opening the app
      Given Vera the visitor has the app's address
      When Vera opens the app
      Then the page shows the message "Hello, World!"

  @story-F1.2
  Rule: The greeting is shown on the first page without sign-in or any click

    Scenario: No sign-in is asked for
      Given Vera the visitor has no account
      When Vera opens the app
      Then the greeting "Hello, World!" is visible without a sign-in page appearing
      And no click was needed to reach it
