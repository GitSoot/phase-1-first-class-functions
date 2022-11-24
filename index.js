function receivesAFunction(postRunActivity) {
    postRunActivity();
  }

  const postRunActivity = (run) => "What a nice day"

  function returnsANamedFunction (exercise) {
    let test = (anything) => testing;
    let myFunction = (a, b) => test;
    
    return myFunction ()
  }

  let returnsAnAnonymousFunction = (test1) => function() {
    // Function Body
 }