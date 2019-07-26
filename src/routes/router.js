import Vue from "vue";
import vueRouter from "vue-router";
import schoolFormlayout from "../components/layout/formsLayout/schoolformLayout.vue";
import directorDashboardLayout from "../components/layout/DirectorDashboard/directorDashboardLayout.vue";
import shuriSchoolLogin from "../components/pages/schoollogin.vue";
import shurirepersenter from "../components/pages/shuriProviderinfo.vue";
import verifyemail from "../components/pages/verifyemail.vue";
import employerProfile from "../components/pages/employerProfile.vue";
import EmployeeLogged from "../components/pages/EmployeeLogged.vue";
import inviteteacher from "../components/pages/inviteTeacher.vue";
import invitedispline from "../components/pages/inviteDispline.vue";
import invitetransport from "../components/pages/inviteTransportMananger.vue";
Vue.use(vueRouter);

const router = new vueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: schoolFormlayout,
            children: [
                {
                    name: "loginschool",
                    path: "/schoollogin",
                    component: shuriSchoolLogin
                },
                {
                    name: "schoolinformation",
                    path: "/schoolinfo",
                    component: shurirepersenter
                },
                {
                    name: "schoolemployerProfile",
                    path: "/employer",
                    component: employerProfile
                },
                {
                    name: "schoolVerification",
                    path: "/verify",
                    component: verifyemail
                },
                {
                    name: "EmployeeLogged",
                    path: "/employerlogged",
                    component: EmployeeLogged
                },
            ]
        },
        {
            name: "directorDashboard",
            path: "/director",
            component: directorDashboardLayout
        },
        {
            name: "inviteteacher",
            path: "/inviteteacher",
            component: inviteteacher
        },
        {
            name: "invitedispline",
            path: "/invitedispline",
            component: invitedispline
        },
        {
            name: "invitetransport",
            path: "/invitetransport",
            component: invitetransport
        },
    ]
});

export default router;