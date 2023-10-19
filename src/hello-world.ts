export function greeter(person: string) {
  if (person.length < 2) {
    return "Hello, World";
  }
  return "Hello, " + person;
}
