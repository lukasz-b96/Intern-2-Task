# Author: Łukasz Baran

## Intern Task for Software Mind

### Solution can be found in folder "components":

- I decided to split this task into three files
- It was not so necessary because the problem was easy and not complicated
- The main component is "Register.js"

### The approach to the problem:

- This task could be resolved in multiple ways: useReducer, Vanilla JavaScript, etc.
- I decided to not overcomplicate it and I just used useState\
  and I simply passed "handlers" in props
- To provide simple validations I used HTML attributes
- In e-mail input, I stick to the task proposal and just validate that\
  If the string contains at least one "." and at most one "@"
- Then, I created two simple reusable components: CustomInput and Checkbox
- Solution does not contain any styling so to have new lines I used <br/> tags

### Optional Requirements:

- Under the "Rejestracja" appears a message "błąd walidacji: or "pomyślna rejestracja"\
  that depends on the validation results
- I wrote all necessary unit tests:
  - Test if elements are rendered
  - Test if the CheckBox is initially empty and whether it works
  - Test if the E-mail input appears
  - Test if inputs are empty
  - Test basic not filled form
  - Test basic filled form
  - Test not filled form with an E-mail
  - Test filled form with a wrong E-mail
  - Test filled form with a good E-mail
