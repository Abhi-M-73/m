import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/user.api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import toast from "react-hot-toast";

const useFetchProfile = () => {
    const dispatch = useDispatch();
    const { data } = useQuery({
        queryKey: ["fetchProfile"],
        queryFn: getUserProfile,
    })
    dispatch(setUser(data?.data));
    return data?.data;
};

export default useFetchProfile;
