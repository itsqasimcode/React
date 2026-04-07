# Custom Hooks
  Custom hooks mostly return javascript so dont make their extention like jsx.
  In this case useCurrencyinfo is a custom hook.

# Component Reusability
  
whenever we use a loop in jsx (react) then a "Key" must be passed.It is also important to enhance performance in a loop.

# useId
The useId hook is a built-in React hook used to generate unique, stable IDs for elements within a component.

whenever a form submits then it goes to somewhere but in this case we dont want to go it to somewhere that's why we used "preventDefault".

     <form
       onSubmit={(e) => {e.preventDefault();}}
                    >