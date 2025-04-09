import{lazy} from "react";
import ProtectedRoute from "../ProtectedRoute";
import MemberLayout from "../../layouts/member";

const MemberLanding = lazy(() => import("../../views/member/index"))

const MemberRoute = {
    path: '/member',
    element: <ProtectedRoute layout={<MemberLayout/>} role="member"/>,
    children:[
        {
            path:'/member',
            element:<MemberLanding/>
        }
    ]
}

export default MemberRoute