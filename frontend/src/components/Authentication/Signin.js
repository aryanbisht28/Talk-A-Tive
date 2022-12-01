import React, { useState } from "react";
import "./Style/signin.css";
import { FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Vector1 from "../Vector1";

function Signin() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1
        style={{
            height:'18.5%',
          fontFamily: "Lexend Deca",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "4rem",
          lineHeight: "88px",
          textAlign: "center",
          color: "#FFFFFF",
          paddingTop: "25px",
        }}
      >
        Talk-A-Tive
      </h1>
      <div className="signin-box">
        <h3 className="signin-heading">Sign In</h3>
        <h5 className="signin-text">Sign in and explore the community!</h5>
        <VStack style={{ marginTop: "30px" }} spacing="10px">
          <FormControl
            style={{
              minWidth: "18vw",
              background: "#224957",
              bordeRadius: "10px",
            }}
            id="email"
            isRequired
          >
            <Input
              //   value={email}
              //   type="email"
              placeholder="Enter Your Email Address"
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl
            style={{
              marginTop: "30px",
              minWidth: "18vw",
              background: "#224957",
              bordeRadius: "10px",
            }}
            id="password"
            isRequired
          >
            <Input
              placeholder="Enter Your Password"
              type={show ? "text" : "password"}
            />
            <InputRightElement
              min-width="4rem"
              style={{ marginTop: "6px", marginRight: "5px" }}
            >
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </FormControl>
          <Button
            width="100%"
            style={{
              marginTop: "30px",
              background: "#20DF7F",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              color: "#ffff",
            }}
            // onClick={submitHandler}
            // isLoading={loading}
          >
            Login
          </Button>
        </VStack>
        <h5 className="signin-register">Register for a new user</h5>
      </div>
      <div className="vector1">
        <Vector1 />
      </div>
    </div>
  );
}

export default Signin;
