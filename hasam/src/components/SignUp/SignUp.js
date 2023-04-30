import { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can add the logic to submit the form data to your backend
    console.log(`Submitted: ${username}, ${email}, ${password}`);
  }

  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="firstName" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
        </form>
    </div>
  );
}

export default SignUp;