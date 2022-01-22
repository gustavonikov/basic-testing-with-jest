# Testing Exercise - Unit tests

## What are Unit tests and why use it?

Unit Tests are a type of testing which purpose is to
validate all the I/O of your application, by testing the small
pieces of your code, may they be functions, methods, components, modules, etc.
They help to improve the maintenance and stability of the application, are
very easy, cheap and quick to integrate.

## Introduction

Unit tests with [Jest](https://jestjs.io/pt-BR/), a great framework for it :), but why am I using Jest?
With Jest you can fulfill all the five types of tools that we use on unit tests, bringing also to the context of web development.
I'm gonna tell what these 5 types of tools are, recommending also the frameworks most used for it.
And at the end you will see why I picked Jest.

Let's begin:

1. The first are the Scaffolding tools, the structure to begin writing our tests, the tool provides methods to do it.<br>
Some of these tools are: [Jest](https://jestjs.io/pt-BR/), [Jasmine](https://jasmine.github.io/), [Mocha](https://mochajs.org/), [Cypress](https://www.cypress.io/).

2. For the second we have an Assertion tool, providing ways to assert the logic and values that we need for the test to work.
And it comes with syntaxes that seems like basic English, making easy to understand. Let me show and example of that:

    ``` javascript
      it('calculates a sum of two numbers', () => {
         const value = 2 + 2;
         expect(value).toEqual(4)
         expect(value).toBeGreaterThan(3);
        })
    ```

      Some of these tools are: [Jest](https://jestjs.io/pt-BR/), [Jasmine](https://jasmine.github.io/), [Chai](https://www.chaijs.com/), [Cypress](https://www.cypress.io/).

3. The third one is the "Test Runner", as the name suggest it reads the tests that we wrote and executes all of them without us doing nothing, unless
type a command. And it can run in the browser or on the server.
Some of these tools are: [Jest](https://jestjs.io/pt-BR/), [Jasmine](https://jasmine.github.io/), [Mocha](https://mochajs.org/), [Karma](https://karma-runner.github.io/latest/index.html), [Cypress](https://www.cypress.io/).

4. For the fourth, we have something called "Mocks, Spies and Stubs". What are these? Will only become clear when you start to write some tests,
but I will try to explain.
Some of the tools that we have are: [Jest](https://jestjs.io/pt-BR/), [Jasmine](https://jasmine.github.io/), [Sinon](https://sinonjs.org/).
    <ul>
      <li>Mocks is like faking a behavior or a function to test different parts of a process, like a call to an API.</li>
      <li>Spies are methods that provides to us information about functions, if we called them, how many times and so on. </li>
      <li>Stubs replaces selected functions with a function that makes sure that the expected behaviour happens.</li>
    </ul>

5. And the last tool we have, is called "Code Coverage". Is a tool that allows us to know how much of code is covered with tests, in the most cases
show us a table with the analysis of the statements, functions, lines and more of our files that are covered. <br>
Some of the tools that we used for that: [Istanbul](https://istanbul.js.org/), [Jest](https://jestjs.io/pt-BR/) (Jest uses Istanbull behind it).

### Conclusion

Well, as you can see for Unit tests Jest has all the features that we need, making easier start to write some tests,
because you don't need to spend much time making the setup and also helps those who don't know how to make more complex ones,
like Mocha + Chai + Sinon + Istanbul for example.

## Getting started

1. Clone repo
2. Run `npm install`
3. Run `npm test` or `npm run jest` if you want to watch your files and run the tests soon as you modify them.
