import React, { useRef, useState } from "react";
import "./CheckFrom.css";

import { useForm, Controller } from "react-hook-form";
const CheckFrom = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    setUserInfo(data);
  };
  console.log("asdasd", errors);
  return (
    <div className="container">
      {/* //!xuat ra man hinh mk   tai khoan*/}
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Check Demo Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="">UserName</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              {...register("username", { required: true, maxLength: 5 })}
            />
          </div>
          <p className="p">
            {errors.username?.type === "required" && "First name is required"}
            {errors?.username?.type === "maxLength" && (
              <p>First name cannot exceed 5 characters</p>
            )}
          </p>
          <div className="field">
            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              placeholder="age"
              {...register("age", { required: true, min: 18, max: 99 })}
            />
          </div>
          <p className="p">
            {errors.age &&
              "You Must be older then 18 and younger then 99 years old"}
          </p>
          <div className="field">
            <label htmlFor="">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="phone"
              {...register("phone", { required: true, min: 18, max: 99 })}
            />
          </div>
          <p className="p">
            {errors.phone?.type === "required" && "First name is required"}
          </p>
          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          <p className="p">
            {errors.email?.type === "required" && "Email account mismatch "}
            {errors?.email?.type === "pattern" && "Email Invalid"}
          </p>

          <div className="field">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
          </div>
          <p className="p">
            {errors.password?.type === "required" &&
              "Password not allowed empty "}
          </p>

          <div className="field">
            <label htmlFor="">RePassword</label>
            <input
              type="password"
              name="Repassword"
              placeholder="Repassword"
              {...register("Repassword", {
                required: true,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
          </div>
          <p className="p">
            {errors.Repassword?.type === "required" &&
              "Password not allowed empty "}
            {errors.Repassword?.type === "validate" && "RePassword Invalid   "}
          </p>

          <button className=" fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CheckFrom;
