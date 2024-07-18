import Layout from "../../components/layout/layout";
import ContactUsRoute from "./routes/contact-us";
import HomeRoute from "./routes/home";

let Applayout = {
    Component: Layout,
    children: [
        HomeRoute,
        ContactUsRoute,
    ],
};

export default Applayout;