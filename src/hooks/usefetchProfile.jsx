import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/user.api";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { useEffect } from "react";
const useFetchProfile = () => {
    const dispatch = useDispatch();

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["fetchProfile"],
        queryFn: getUserProfile,
    });

    useEffect(() => {
        if (data?.user) {
            dispatch(setUser(data.user));
        }
    }, [data, dispatch]);

    return {
        user: data?.user,
        isLoading,
        isError,
        refetch,  
    };
};

export default useFetchProfile;

