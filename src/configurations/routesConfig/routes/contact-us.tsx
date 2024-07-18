let ContactUsRoute = {
    path: "/contact-us",
    async lazy() {
        let { Contact } = await import("../../../pages/Contact");
        return { Component: Contact };
    },
};

export default ContactUsRoute;