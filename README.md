# BDD/TDD PoC (with extra pickle juice)

Imagine a future with me...

<br /> Your project is fully defined, requests from a client are clear..
<br />.. these requirements need to be transcribed into a first-person perspective --- the person using your app.
<br />... you break out behaviors into descriptive chunks
<br />... you use **Gherkin** syntax, because _convention over configuration_ is ***GOOD***
<br />... you use **Cucumber** to turn these behaviors into *real tests* that run in a headless browser
<br />... tests are broken! Write some code, make them pass!
<br />... Tests all pass! You're done!
<br />... Client wants to change a feature...
<br />... ...
<br />... you update the tests. They break!
<br />... you change the code --- they pass!
<br />... Client is happy, you're done!


### Suggested Stack

- gherkin (not a library, but a language)
- CucumberJS (because you're writing JavaScript anyway...)
- A driver... dunno yet! Probably WebDriver or Nightmare.


### Additional

- https://github.com/stewartml/gherkin-jest
- [writing features - gherkin language] (behat)
- [Speak Gherkin And Learn How To Collect Requirements For Your Project]

| Library              | Pro                                         | Con                 |
| :------------------- | :------------------------------------------ | :------------------ |
| Nightwatch-Cucumber  | fairly simple behavior api (via nightwatch) | writing steps       |
| Cucumber-Mink        | eliminates need to write 40 common steps    | lacks driver        |
| react-cucumber       | integrates with Jest                        | writing steps       |
| iensu/mocha-cakes-2  |      |             |



[writing features - gherkin language]: 'http://docs.behat.org/en/v2.5/guides/1.gherkin.html'
[Speak Gherkin And Learn How To Collect Requirements For Your Project]: 'https://medium.com/@NeotericEU/speak-gherkin-and-learn-how-to-collect-requirements-for-your-project-dad171da8fb'






