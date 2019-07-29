import Vue from "vue";
import vueRouter from "vue-router";
import Dashboard_Layout from "../components/layout/dashboard/DashboardLayout.vue";
import shuri_School_Login from "../components/pages/login.vue";
import Registration from "../components/pages/registration.vue";
import verify_Email from "../components/pages/verifyEmail.vue";
import employee_Profile from "../components/pages/employeeProfile.vue";
import employee_Logged from "../components/pages/employeeLogged.vue";
import userAgreement from "../components/pages/agreement.vue";
import home from "../components/pages/home.vue";
import members from "../components/pages/members.vue";



Vue.use(vueRouter);

const router = new vueRouter({
    mode: "history",
    routes: [
        {
            path: "/shuriSchool",
            redirect:"/home",
            component: Dashboard_Layout,
            children:[
                {
                name: "Home",
                component:home,
                path: "/home" 
            },
            {
                name: "AllMembers",
                component:members,
                path: "/all_members" 
            }
        ]
        },

        {
            name: "Login to Shuri School",
            path: "/",
            component: shuri_School_Login
        },
        {
            name: "Registration To Shuri School",
            path: "/registration",
            component:Registration
        },
        {
            name: "school Employee Profile",
            path: "/employee",
            component: employee_Profile
        },
        {
            name: "school Verification",
            path: "/verify",
            component: verify_Email
        },
        {
            name: "Employee Logged",
            path: "/logged",
            component: employee_Logged
        },
        {
            name: "User Agreemeent",
            path: "/agreement",
            component: userAgreement
        },
     
    ]
});

export default router;