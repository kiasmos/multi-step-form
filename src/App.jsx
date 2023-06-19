import "./App.css";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import FourthForm from "./components/FourthForm";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function App() {
  //necenci formda oldugumuz burdan teyin olur
  const [countPage, setCountPage] = useState(1);

  const validation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string("*Only text")
      .required("*Required")
      .email("*Not an email"),
    phone: Yup.string("*Not a number")
      .required("*Required")
      .min(10, "*Min 5")
      .max(10, "*Max 10"),
    company: Yup.string("*Only text").required("*Required"),
    services: Yup.array().min(1, "*You have to select at least one."),
    budget: Yup.string().required("*Please select an option."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      services: [],
      budget: "",
    },
    validateOnMount: true,
    onSubmit: (e) => {
      console.log(e);
    },
    validationSchema: validation,
  });

  // if (formik.isValid) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }

  console.log(countPage, "Rendered");

  return (
    <div className="container">
      <h2 className="content">Get a project quote</h2>
      <p className="description">
        Please fill the form below to receive a quote for your project. <br />
        Feel free to add as much detail as needed.
      </p>
      <form className="form" action="#" onSubmit={formik.handleSubmit}>
        <div className="form-main">
          <FirstForm
            countPage={countPage}
            formik={formik}
            setCountPage={setCountPage}
          />
          <SecondForm
            countPage={countPage}
            formik={formik}
            setCountPage={setCountPage}
          />
          <ThirdForm
            countPage={countPage}
            formik={formik}
            setCountPage={setCountPage}
          />
          <FourthForm
            countPage={countPage}
            formik={formik}
            setCountPage={setCountPage}
          />
        </div>
      </form>
    </div>
  );
}
