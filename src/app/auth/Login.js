import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Formik } from "formik";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
function Login() {
  const [submited, setSubmited] = React.useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        color: "black",
        textAlign: "center",
        paddingTop: 50,
        backgroundColor: "#bdc3c7",
        height: "100vh",
      }}
    >
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmited(true);
            // handleLogin(values);
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 48,
              }}
            >
              <p>Selamat Datang</p>
            </div>
            <div
              style={{
                fontSize: 18,
              }}
            >
              <p>
                Masuk sebagai admin untuk kelola <br />
                data TAHURA Nuraksa
              </p>
            </div>
            <div
              style={{
                fontSize: 18,
              }}
            >
              <p>Nama Pengguna</p>
            </div>
            <div
              style={{
                width: 385,
                height: 54,
                margin: "auto",
                fontSize: 18,
                letterSpacing: "0.015em",
                fontFamily: "RubikL",
              }}
            >
              <Input
                type="text"
                required={true}
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                style={{ width: "100%" }}
              />
            </div>
            {errors.username && touched.username && errors.username}
            <div
              style={{
                fontSize: 18,
              }}
            >
              <p>Kata Sandi</p>
            </div>
            <div
              style={{
                width: 385,
                height: 54,
                margin: "auto",
                fontSize: 18,
                letterSpacing: "0.015em",
                fontFamily: "RubikL",
              }}
            >
              <Input
                type="password"
                name="password"
                required={true}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
                InputLabelProps={{ shrink: false }}
              />
            </div>
            {errors.password && touched.password && errors.password}
            <div
              style={{
                width: 150,
                height: 17,
                paddingLeft: 59,
                // paddingTop: 28,
                fontSize: 14,
                letterSpacing: "0.015em",
                fontFamily: "RubikL",
              }}
            >
              {/* <FormControlLabel
                      control={<Checkbox name="checkedC" />}
                      label="Ingat saya"
                    /> */}
            </div>
            <div
              style={{
                fontSize: 14,
                margin: "auto",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                disabled={submited}
                style={{
                  width: "20%",
                }}
              >
                Masuk
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
