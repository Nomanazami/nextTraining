"use client"
import React from 'react'
import {useRouter} from "next/navigation"
function Login() {
    const router= useRouter()
    const onSubmit = ()=>{
      router.push("/profile")
      console.log("onSubmit");
      
    }
  return (
    <div>
      Login
      <button onClick={onSubmit}>LOGIN</button>
    </div>
  )
}

export default Login
