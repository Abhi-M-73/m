import { BadgeDollarSign, BanknoteArrowUp, CircleUser, Coins, LayoutDashboard, MessageCircleQuestionMark, User } from "lucide-react";
import { AuthenicatedRoutes } from "../routes/Routes";

const SidebarContent = {
    User: [
        {
            id: "Dashboard",
            icon: <LayoutDashboard />,
            name: "Dashboard",
            link: AuthenicatedRoutes.USER_DASHBOARD,
        },
        {
            id: "Team",
            icon: <User />,
            name: "Team",
            options: [
                {
                    id: "Direct Team",
                    name: "Direct Team",
                    link: AuthenicatedRoutes.USER_DIRECT_TEAM,
                },
                {
                    id: "Level Team",
                    name: "Level Team",
                    link: AuthenicatedRoutes.USER_LEVEL_TEAM,
                },
            ],
        },
        {
            id: "Income",
            icon: <Coins />,
            name: "Income",
            options: [
                {
                    id: "Referral Income",
                    name: "Referral Income",
                    link: AuthenicatedRoutes.USER_REFERRAL_INCOME,
                },
                {
                    id: "Level Income",
                    name: "Level Income",
                    link: AuthenicatedRoutes.USER_LEVEL_INCOME,
                },
                {
                    id: "ROI Income",
                    name: "ROI Income",
                    link: AuthenicatedRoutes.USER_ROI_INCOME,
                },
            ],
        },
        {
            id: "Investment",
            icon: <BanknoteArrowUp />,
            name: "Investment",
            options: [
                {
                    id: "Make Investment",
                    name: "Make Investment",
                    link: AuthenicatedRoutes.USER_MAKE_INVESTMENT,
                },
                {
                    id: "Investment History",
                    name: "Investment History",
                    link: AuthenicatedRoutes.USER_INVESTMENT_HISTORY,
                },
                {
                    id: "Deposit",
                    name: "Deposit",
                    link: AuthenicatedRoutes.USER_DEPOSIT,
                },

            ],
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
            id: "Topup",
            icon: <BadgeDollarSign />,
            name: "Topup",
            options: [
                {
                    id: "Admin Topup",
                    name: "Admin Topup",
                    link: AuthenicatedRoutes.ADMIN_TOPUP,
                },
                {
                    id: "Admin Topup History",
                    name: "Admin Topup History",
                    link: AuthenicatedRoutes.ADMIN_TOPUP_HISTORY,
                }
            ]
        },
    ],
};

export default SidebarContent;
