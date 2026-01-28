import React, {useState } from 'react'
import ReusableButton from '../../components/ui/ReusableButton';
import { Loader2, Lock, Mail, Phone, User } from 'lucide-react';
import ReusableForm from '../../components/ui/ReusableForm';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../../api/user.api';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../components/ui/Loader';

const Register = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const { mutate, isPending } = useMutation({
    mutationFn: userRegister,
    onSuccess: (data) => {
      toast.success(data?.message || "Registration successful!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
      })
      navigate('/login');
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "Registration failed. Please try again."
      );
    }
  });

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };
    mutate(payload);
  };


  return (
    <div className='space-y-4'>
      <h1 className='text-[var(--btnColor)] text-4xl text-center font-semibold mb-5'>Register Now</h1>
      <ReusableForm
        type={"text"}
        label={"Name"}
        name={"name"}
        value={formData.name}
        onChange={handleInputChange}
        placeholder={"Enter Your Name"}
        required={true}
        icon={User}
      />
      <ReusableForm
        type={"email"}
        label={"Email"}
        name={"email"}
        value={formData.email}
        onChange={handleInputChange}
        placeholder={"Enter Your Email"}
        required={true}
        icon={Mail}
      />
      <ReusableForm
        type={"number"}
        label={"Phone"}
        name={"phone"}
        value={formData.phone}
        onChange={handleInputChange}
        placeholder={"Enter Your Phone"}
        required={true}
        icon={Phone}
      />
      <ReusableForm
        type={"password"}
        label={"Password"}
        name={"password"}
        value={formData.password}
        onChange={handleInputChange}
        placeholder={"Enter Your Password"}
        required={true}
        icon={Lock}
      />

      {/* <OtpInputWithButton
        label="Email OTP"
        name="otp"
        value={""}
        onChange={(e) => {}}
        placeholder="Enter OTP"
        required
        icon={Mail}
        buttonLabel="Send"
        loading={false}
        onButtonClick={() => {
          console.log("Send OTP");
        }}
      />; */}

      <div className="w-full mt-4">
        <ReusableButton
          label={isPending ? <Loader2 className="animate-spin" /> : "Register"}
          onClick={handleRegister}
          loading={isPending}
          disabled={isPending}
          icon={Lock}
          variant="primary"
          type="button"
        />
      </div>

      <div>
        <p className="text-md text-center text-gray-400 whitespace-nowrap">
          Already have an account? {""}
          <span onClick={() => onNavigate("/login")} className="text-[var(--btnColor)] font-medium cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
