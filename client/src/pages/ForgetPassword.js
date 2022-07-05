import React from "react";
import AuthGrid from "../components/AuthGrid";
import Button from "../components/Button";
import Back from "../components/Back";
import Input from "../components/Input";

function ForgetPassword() {
  return (
    <AuthGrid text={"Lupa Kata Sandi"}>
      <form className="space-y-4">
        <Input title={"Email"} placeholder="Email" />

        <Button title={"Kirim"} width="w-full" />
        <Back title={"Batal"} width="w-full" />
      </form>
    </AuthGrid>
  );
}

export default ForgetPassword;
