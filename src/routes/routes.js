import HomeView from "@/Views/HomeView.vue";
import AboutView from "@/Views/AboutView.vue";
import ContactView from "@/Views/ContactView.vue";
import ServicesView from "@/Views/ServicesView.vue";
import NotFoundView from "@/Views/NotFoundView.vue";
import MetalRoofingView from "@/Views/MetalRoofingView.vue";

export const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/services', component: ServicesView },
    { path: '/metal-roofing', component: MetalRoofingView },
    { path: "/:pathMatch(.*)*", component: NotFoundView }
]