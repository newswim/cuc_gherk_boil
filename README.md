# BDD/TDD PoC (with extra pickle juice)


Imagine a future with me...

Your project is fully defined, requests from a client are clear..
```
.. these requirements need to be transcribed into a first-person perspective --- the person using your app.
... you break out behaviors into descriptive chunks
... you use **Gherkin** syntax, because _convention over configuration_ is ***GOOD***
... you use **Cucumber** to turn these behaviors into *real tests* that run in a headless browser
... tests are broken! Write some code, make them pass!
... Tests all pass! You're done!
... Client wants to change a feature...
... ...
... you update the tests. They break!
... you change the code --- they pass!
... Client is happy, you're done!
```

### Suggested Stack

- gherkin (not a library, but a language)
- CucumberJS (because you're writing JavaScript anyway...)
- A driver... dunno yet! Probably WebDriver or Nightmare.

