import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Data/Context";
import { useToast } from '@chakra-ui/react'


let initialData = {
  name: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const { setShowSignUpBox } = useContext(Context)
  const [inputData, setInputData] = useState(initialData);
  const toast = useToast()


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // axios.post(`http://localhost:5000/user/register`, inputData)
    //   .then((res) => {
    //     console.log(res.data)
    //     setInputData(initialData)
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error)
    //   })

    fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        setInputData(initialData);
        setShowSignUpBox(false)
        toast({
          title: 'Registered Successfully',
          status: 'success',
          position:"top",
          duration: 1000,
          isClosable: true,
        })
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  return (
    <div 
      className="  rounded-lg max-w-xl m-auto mt-32 h-100 p-6"
      style={{boxShadow: "rgba(160, 150, 177, 0.489) 0px 3px 6px, rgba(160, 150, 177, 0.4) 0px 7px 13px -3px, rgba(160, 150, 177, 0.4) 0px -1px 5px inset"}}
    >
      <h2 className="font-medium text-3xl text-white">Sign Up</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <br />
          <i className="fa-solid fa-user text-zinc-100 mr-4"></i>
          <input
            type="text"
            name="name"
            value={inputData.name}
            placeholder="name"
            className="text-left border-2 outline-none h-9 w-2/4 text-zinc-800 font-medium rounded"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <i className="fa-solid fa-envelope text-zinc-100 mr-4"></i>
          <input
            type="text"
            name="email"
            value={inputData.email}
            placeholder="email"
            className="text-left border-2 outline-none h-9 w-2/4 text-zinc-800 font-medium rounded"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <i className="fa-solid fa-lock text-zinc-100 mr-4"></i>
          <input
            type="password"
            name="password"
            value={inputData.password}
            placeholder="password"
            className="text-left border-2 outline-none h-9 w-2/4 text-zinc-800 font-medium rounded"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <button 
            className="border-2 p-2 pl-10 pr-10 text-white font-medium rounded-md bg-purple-700  hover:bg-gradient-to-r from-purple-600 to-purple-900  "
            
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
