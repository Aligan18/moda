


 class Valid {

    passwordLength =(password) =>{
        if(password){
        return password.length > 7 ? false : 'Пароль не может быть меньше 8 символов'; 
        }
        else{
            return "Вы не указали пароль";
        }
    }

    checkDublicationPassword = (password, dublication) =>{
        
       return password === dublication?  false : "Пароли не совпадают"

    }

    checkEmail = (email)=>{

        if(email){
            const check = email.split('@')
            if(check.length>0){
                return check[1]=== "gmail.com" ? false : 'email должен содержать @gmail.com'
            }
            else {
                return "Вы ввели не верный email"
            }
        }
        else{
            return "Вы не указали email";
        }

    }

    checkName = (name) =>{
      
      return name? false : "Вы не указали Имя"
     
    }
    checkSurname = (surname) =>{
      
     
      return surname? false : "Вы не указали Фамилию"
    }
    checkLogin = (login) =>{
      
        return login? false : "Вы не указали Логин"
      
    }

    checkPhone=(phone)=>{
        if(phone){
            const number = phone.split("+")[1]
            if (number){
                return number.length < 11 ? "Не правильный номер телефона " : false
            }
            else{return 'Номер должен начинаться с +'}
            
         }
        else{
            return "Введите номер телефона"
        }
    }

    


}


class FullValidator {

    fullChecking=(password, email ,dublication, name, surname, login)=>{
        let error = {}
        let isError=false

        error.password= Validator.passwordLength(password)
        error.dublication= Validator.checkDublicationPassword(password, dublication)
        error.email = Validator.checkEmail(email)
        error.name= Validator.checkName(name)
        error.surname= Validator.checkSurname(surname)
        error.login= Validator.checkLogin(login)

        const errorArray= Object.values(error)

        errorArray.forEach((error) => {
            if(error){
                isError = true
                return error;
            }
        })

        return {isError , error}
    }

 

}
export const Validator =  new Valid()
export default new FullValidator();