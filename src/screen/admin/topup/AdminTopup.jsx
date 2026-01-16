import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { getUserByUsername, topupUser } from '../../../api/admin.api';
import ReusableForm from '../../../components/ui/ReusableForm';
import { User } from 'lucide-react';
import ReusableButton from '../../../components/ui/ReusableButton';
import toast from 'react-hot-toast';

const AdminTopup = () => {
    const [username, setUsername] = useState("");
    const [debouncedUsername, setDebouncedUsername] = useState("");
    const [amount, setAmount] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedUsername(username);
        }, 800);

        return () => clearTimeout(timer);
    }, [username]);

    const { data } = useQuery({
        queryKey: ['user', debouncedUsername],
        queryFn: () => getUserByUsername({ userName: debouncedUsername }),
        enabled: debouncedUsername.length > 0,
    });

    useEffect(() => {
        if (data?.user) {
            setUser(data.user);
        } else {
            setUser(null);
        }
    }, [data]);

    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: topupUser,
        onSuccess: (res) => {
            toast.success(res?.message || 'User topup successful');
            queryClient.invalidateQueries({ queryKey: ['topupHistory'] });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || 'Something went wrong');
        },
    });

    const handleTopupUser = () => {
        mutate({ username: debouncedUsername, amount });
    };

    return (
        <div className='max-w-3xl w-full mx-auto space-y-4'>
            <ReusableForm
                label="Username"
                name="username"
                type="text"
                placeholder="Type Username Here"
                required
                icon={User}
                onChange={(e) => setUsername(e.target.value)}
            />

            {user && (
                <div className='max-w-3xl w-full mx-auto space-y-4 mt-4 border border-slate-600 rounded-lg p-5'>
                    <div className='p-3 border border-slate-600 rounded-lg flex items-center gap-3'>
                        <div className='h-20 w-20 rounded-full border flex items-center justify-center text-2xl font-semibold'>
                            {user?.username?.charAt(0).toUpperCase() || "U"}
                        </div>
                        <div>
                            <p><b>Username:</b> {user.username}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Phone:</b> {user.phone}</p>
                        </div>
                    </div>

                    <ReusableForm
                        label="Amount"
                        name="amount"
                        type="number"
                        placeholder="Type Amount Here"
                        required
                        icon={User}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <ReusableButton
                        label="Topup"
                        onClick={handleTopupUser}
                        icon={User}
                        loading={isPending}
                        disabled={!debouncedUsername || !amount || isPending}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminTopup;
