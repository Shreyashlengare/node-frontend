import { useState } from "react";
import "./../Pages/Welcome.css"

function Welcome() {

    const [data, setData] = useState()

    const login = () =>{
        fetch('http://15.206.89.133:8081/employee/demo')
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setData(data);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
    }

    return (
        <>
            <div class="login-page">
                <div class="form">
                    <h1> Fin Meadows  </h1>
                    {data ? data : ''}
                    <form class="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p class="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button onSubmit={login}>login</button>
                        <p class="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Welcome