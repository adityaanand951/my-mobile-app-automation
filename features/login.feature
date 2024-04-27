Feature: Login Functionality

  Scenario Outline: User Login with Valid Credentials
    Given User is on the login screen
    When User enters "<username>" and "<password>"
    And User clicks on the login button
    Then User should be logged in successfully

    Examples:
      | username           | password   |
      | validUser1         | pass123    |
      | validUser2         | pass456    |

  Scenario Outline: User Login with Invalid Credentials
    Given User is on the login screen
    When User enters "<username>" and "<password>"
    And User clicks on the login button
    Then User should see an error message

    Examples:
      | username           | password   |
      | invalidUser1       | wrongpass  |
      | invalidUser2       |            |
