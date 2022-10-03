# Journalmaker


## Description

This app provides a template for a journal. 

[Live Demo](https://rxthew/github.io/journalmaker)


## Remarks 

This was my first project built with React and Typescript. At the outset, this was only meant to be my first exposure to React, but
after reading the documentation I felt I had enough of a good understanding to challenge myself further, and the crude nature of
the project felt like a good opportunity to get my hands dirty using Typescript. 

I came to enjoy the type-checking because I found it similar to unit-testing, but the type declarations stymied my progress
because I had a lot of uncertainty over the types to declare for different React components. In the end, this produced dividends
because I learned a lot more about React than I would have had I produced this in regular Javascript. To be specific, there was
a point when I wanted to create a class component which takes a built-in React HTML element as a prop and populates it with text.
At first I thought I was trying to do it using a higher order component, but through the Typescript debugger's complaints it 
dawned on me that I am trying to treat an element which was already instantiated as an abstraction. This defeated the purpose anyway,
because React already does this for you.   

When I was first reading about React, I noticed I had a predilection for Functional Components over Class Components, so I decided
to focus on class components in building this to ensure I had some experience with them, then I converted some of the compoonents
to functional components.






