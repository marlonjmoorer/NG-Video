import { FormGroup } from "@angular/forms";

export class AbstractForm {

  validation = {}
  mapForm(form: FormGroup) {
    var data = {}
    for (var key in form.controls) {
      var value = form.controls[key].value;
      data[key] = value
    }
    return data;
  }
  validateForm(form: FormGroup) {
    // console.log(this.loginForm.controls)
    this.validation = {}
    for (var key in form.controls) {
      var control = form.controls[key];
      if (control.hasError) {
        console.log(key)
        console.log(control.errors)
        for (var errorKey in control.errors) {
          var error = control.errors[errorKey]
          let map = {
            'required': `${key} is required`,
            'email': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `${key} has a minimum length of ${error.requiredLength || ""}`
          }
          this.validation[key] = map[errorKey]
          break;

        }
      }
    }
    console.log(this.validation)
    return Object.keys(this.validation).length === 0
    //return this.validation == {}
  }
}