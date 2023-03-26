function LoginForm () {
    return (
      <form className='login-form'>
                <label className='label-form'>Email</label>
                <input placeholder='user@neonburger.com'></input>
                <label>Password</label>
                <input type='password' placeholder='••••••••' id='password'></input>
                <button type='submit' text='Ingresar'>Login</button>
            </form>   
    );
};

export default LoginForm;
