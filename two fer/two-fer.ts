export function twoFer(name:string): string {
    // ^                 ^   ^ this is called a return type; it's the type of the
    // ^                 ^     value that is returned from this function
    // ^                 ^
    // ^                 parameters go here
    // ^
    // allows the tests to import this function and call it
    return `One for ${name? name: 'you'}, one for me.`
    // <-- Your code goes here. You may remove all the commentary in this file.
  }