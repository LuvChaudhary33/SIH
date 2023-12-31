import {Button, Form, Input} from "antd"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import {useDispatch} from "react-redux"
import {showLoading, hideLoading} from "../redux/alertsSlice"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async(values) =>{
    try {
      dispatch(showLoading())
      const res = await axios.post('http://localhost:8000/api/user/login', values)
      dispatch(hideLoading())
      if(res.data.success){
        toast.success(res.data.message)
        toast("redirecting to home page");
        localStorage.setItem("token", res.data.data)
        navigate("/")
      }else{
        toast.error(res.data.message)
      }
    } catch (err) {
      dispatch(hideLoading())
      toast.error("Something went wrong!")
    }
  }
  return (
    <div className="authentication">
        <div className="authentication-form card p-2">
          <h1 className="card-title">Welcome Back!</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label='Email' name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label='Password' name="password">
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Button className="primary-button my-2" htmlType="submit">Login</Button>
            <Link to="/register" className="anchor mt-2">Click here to Register</Link>
          </Form>
        </div>
    </div>
  )
}

export default Login