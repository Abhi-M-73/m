import { BadgeDollarSign, BanknoteArrowUp, CircleUser, Coins, icons, LayoutDashboard, LocateIcon, MapPin, MessageCircleQuestionMark, Settings, User } from "lucide-react";
import { AuthenicatedRoutes } from "../routes/Routes";

const SidebarContent = {
    User: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenicatedRoutes.USER_DASHBOARD,
        },
       
        // {
        //     id: "Investment",
        //     icon: <BanknoteArrowUp />,
        //     name: "Investment",
        //     options: [
        //         {
        //             id: "Make Investment",
        //             name: "Make Investment",
        //             link: AuthenicatedRoutes.USER_MAKE_INVESTMENT,
        //         },
        //         {
        //             id: "Investment History",
        //             name: "Investment History",
        //             link: AuthenicatedRoutes.USER_INVESTMENT_HISTORY,
        //         },
        //         {
        //             id: "Deposit",
        //             name: "Deposit",
        //             link: AuthenicatedRoutes.USER_DEPOSIT,
        //         },

        //     ],
        // },
        {
            id: "Address",
            icon: <MapPin />,
            name: "Address",
            link: AuthenicatedRoutes.USER_ADDRESS,
        },
        {
            id: "Support",
            icon: <MessageCircleQuestionMark />,
            name: "Support",
            options: [
                {
                    id: "Raise Ticket",
                    name: "Raise Ticket",
                    link: AuthenicatedRoutes.USER_RAISE_TICKET,
                },
                {
                    id: "Raise Ticket History",
                    name: "Raise Ticket History",
                    link: AuthenicatedRoutes.USER_RAISE_TICKET_HISTORY,
                },
            ],
        },

        {
            id: "Profile",
            icon: <CircleUser />,
            name: "Profile",
            link: AuthenicatedRoutes.USER_PROFILE,
        },
    ],

    Admin: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenicatedRoutes.ADMIN_DASHBOARD,
        },
        {
            id: "Team",
            icon: <User />,
            name: "Team",
            options: [
                {
                    id: "All Team",
                    name: "All Team",
                    link: AuthenicatedRoutes.ADMIN_TEAM,
                },
            ],
        },
        {
            id: "Manage Product",
            icon: <Settings />,
            name: "Manage Product",
            options: [
                {
                    id: "Create Category",
                    name: "Create Category",
                    link: AuthenicatedRoutes.CREATE_CATEGORY,
                },
                {
                    id: "Create Product",
                    name: "Create Product",
                    link: AuthenicatedRoutes.CREATE_PRODUCT,
                },
                {
                    id: "Product List",
                    name: "Product List",
                    link: AuthenicatedRoutes.PRODUCT_LIST,
                },
            ]
        },
    ],
};

export default SidebarContent;
