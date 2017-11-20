Feature: Service login
  The counter feature is not meant for public use. The main page can be accessed
  by anyone, but the counter feature is limited only for selected users.

  Scenario: Access to the login
    Given I visit the service website
    Then I have access to the service login

  Scenario: Access to the counter
    Given I visit the service website
    When I login into the service with valid credentials
    Then I have access to the counter features

  Scenario: Logout from the service
    Given I visit the service website
    When I login into the service with valid credentials
    When I logout from the service
    Then I have access to the service login
