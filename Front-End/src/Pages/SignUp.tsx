

// interface FormValues {
//   name: string;
//   email: string;
//   password: string;
// }

import { useState } from "react"

let initialData = {
    name:"",
    email:"",
    password:""
}

export const SignUp = () => {
    const [inputData,setInputData] = useState(initialData)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setInputData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(inputData)
        setInputData(initialData)
    }

  return (
    <div className="border-2 max-w-xl m-auto mt-32 h-100 p-4">
        <h2 className="font-medium text-2xl">Sign Up</h2>
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <i className="fa-solid fa-user text-zinc-500"></i>
                <input type="text" name="name" value={inputData.name} placeholder="name" className="text-left border-2 outline-none h-9 w-2/4 text-zinc-600" onChange={handleChange}/>
                <br />
                <br />
                <i className="fa-solid fa-envelope text-zinc-500"></i>
                <input type="text" name="email" value={inputData.email} placeholder="email" className="text-left border-2 outline-none h-9 w-2/4 text-zinc-600" onChange={handleChange}/>
                <br />
                <br />
                <i className="fa-solid fa-lock text-zinc-500"></i>
                <input type="password" name="password" value={inputData.password} placeholder="password" className="text-left border-2 outline-none h-9 w-2/4 text-zinc-600" onChange={handleChange}/>
                <br />
                <br />
                <button className="border-2 p-2 pl-10 pr-10 text-white font-medium rounded-md bg-indigo-400 hover:bg-indigo-500">Submit</button>
            </form>
             
        </div>    
    </div>
  )
}
