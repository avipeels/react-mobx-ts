# Terms in Mobx

## Reaction
A function that has two arguments.
1. Predicate function - it returns values or properties that are reacted to.
2. Effect/ Reactionary function -  it gets the return value of the predicate as its first argument. The effect
will only execute when the return value changes.

## Autorun
A function that takes one argument. It will execute the function whenever any observable value used in it changes.

## Computed
A function that automaticallycomputes based on the derived value from the state when the observable it uses changes

## Difference between `Computed` and `Reaction`:
Use `Computed` when you need a derived value from your state.
Use `Reaction`/`Autorun` to have any side-effect Eg: alert, modal, xhr request.

## Action
A function used to update the state. Will give significance performance as compared to modifying observables
manually.
