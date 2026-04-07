# Password Generator

      ## useCallback function

useCallback hook  is used to memoize (store) a function so that it does not get recreated on every render. It is mainly useful when passing functions to memoized child components or when the function is used inside useEffect. However, it should not be overused because it also has a performance cost..
          
           interview

    1 -  only changes if one of its dependencies changes (length, numberAllowed, charAllowed, setPassword).
    2 -  stale closure happens when the function captures old state values because dependencies were not updated correctly.
    3  - Why do we use useCallback with useEffect? Because functions are recreated on every render, putting them in the dependency array of useEffect can cause unnecessary re-runs. useCallback memoizes the function so its reference stays stable unless dependencies change, preventing unwanted effect executions.

     ## useeffect function

useEffect is used to handle side effects in functional components and synchronise a component to external systems. It runs after render and its execution depends on the dependency array. It can also return a cleanup function to prevent memory leaks. Incorrect dependency handling can cause infinite loops or stale closures.

          interview
           
This component generates a password dynamically based on selected options. useState manages UI state, useCallback memorizes functions to prevent unnecessary re-creations, useEffect regenerates (refreshes) the password when dependencies change, and useRef is used to access the DOM for copying text.           