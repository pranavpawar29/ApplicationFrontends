import { AbstractControl, ValidationErrors} from "@angular/forms"


export class PasswordValidators{

    static incorrectPassword(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== 'abcde')
                    resolve({incorrectPassword: true});
                else
                    reject(null)
            }, 2000);
        })
    }

    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if(control.value !== 'abcde')
                    resolve({invalidPassword: true});
                else
                    resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl){
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        if(newPassword?.value !== confirmPassword?.value){
            return {passwordsDoNotMatch: true}
        }
        return null;
    }


}