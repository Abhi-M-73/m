import React, { useState } from 'react'
import OtpInputWithButton from '../../components/ui/OtpInputWithButton';
import { Lock, Mail, ShieldCheck } from 'lucide-react';
import ReusableForm from '../../components/ui/ReusableForm';
import ReusableButton from '../../components/ui/ReusableButton';

const ForgetPassword = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        email: '',
        otp: '',
        newPassword: '',
    });

    return (
        <div className='space-y-4'>
            <h1 className='text-white text-4xl text-center font-semibold mb-5'>Forget Password</h1>
            <ReusableForm
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required={true}
                icon={Mail}
            />
            <OtpInputWithButton
                label="Email OTP"
                name="otp"
                value={""}
                onChange={(e) => { }}
                placeholder="Enter OTP"
                required
                icon={ShieldCheck}
                buttonLabel="Send"
                loading={false}
                onButtonClick={() => {
                    console.log("Send OTP");
                }}
            />

            <ReusableForm
                label="New Password"
                name="newPassword"
                type="password"
                placeholder="Enter your new password"
                required={true}
                icon={Lock}
            />

            <div className="w-full mt-4">
                <ReusableButton
                    label="Reset Password"
                    onClick={() => { }}
                    loading={false}
                    disabled={false}
                    icon={Lock}
                    variant="primary"
                    type="button"
                />
            </div>
        </div>
    )
}

export default ForgetPassword
