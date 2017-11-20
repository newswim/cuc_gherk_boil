Feature: Counter feature
  An up counter is needed due to a super important business reason. Counter
  starts from a positive number and service users can increment it.

  Scenario: Counter starts from a positive number
    Given I'm a permitted counter feature user
    Then the counter value is a positive number

  Scenario: User can increment the counter
    Given I'm a permitted counter feature user
    When I increment the counter
    Then the counter value is incremented
