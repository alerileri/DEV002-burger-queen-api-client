function LoginForm () {
    return (
      <form className='login-form'>
                <label className='label-form'>Email</label>
                <input placeholder='user@neonburger.com'></input>
                <label>Password</label>
                <input placeholder='password:9'></input>
                <button type='submit'>Login</button>
            </form>   
    );
};

export default LoginForm;
