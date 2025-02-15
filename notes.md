side effects are 'tasks' that don't impact the current component render cycle.

USE EFFECT

useEffect will be run after the component function finished.

If you set a dependencies array, the function in useEffect will only
be executed if one of the values in the dependencies array change.

If you set an empty dependencies array, the function in useEffect will only be executed once after the component function finished.

If you don't add a dependencies array, the function in useEffect will be executed each time the component function finished. Note that you can have an inifinite loop then.

Note that useEffect is an extra execution cycle.

With a return function in an useEffect function you can create a cleanup function.
This function will be run before the function in useEffect runs again or before the component dismount.

When adding a function as a dependency there is a change of creating an infinite loop. A function is technical an object and is recreated when the component is recreated.

USE CALL BACK

By wrapping a function with a useCallBack, the function will be restored and not be recreated when the component is recreated.

UseCallBack has also a dependencies array like useEffect.
