import React, {useState} from 'react'

const BasicForm = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const [account, setAccount] = useState({username: "", email:"", age:0});
    // const [temp, setTemp] = useState("");
    const handleChange = (e) => {
        // setUsername(e.target.value)
        setAccount({...account, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(account)
        // setTemp(e.target[0].value)
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            {account.username} - {account.email}
            <br/><br/>
            <input name="username" placeholder='nhập username' value={account.username || ""} onChange={handleChange}/>
            <br/>
            <input name="email" placeholder='nhập email' value={account.email || ""} onChange={handleChange}/><br/>
            <input name="age" placeholder='nhập age' value={account.age || ""} onChange={handleChange}/><br/>
            <br/><br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default BasicForm;