import HomeView from "@/Views/HomeView.vue";
import AboutView from "@/Views/AboutView.vue";
import ContactView from "@/Views/ContactView.vue";
import ServicesView from "@/Views/ServicesView.vue";
import NotFoundView from "@/Views/NotFoundView.vue";
import MetalRoofingView from "@/Views/MetalRoofingView.vue";
import PaintingDrywalsView from "@/Views/PaintingDrywalsView.vue";
import WindowsAndDoorsView from "@/Views/WindowsAndDoorsView.vue";
import LandscapingView from "@/Views/LandscapingView.vue";
import FlooringView from "@/Views/FlooringView.vue";
import PlatinumProMovingView from "@/Views/PlatinumProMovingView.vue";

export const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/services', component: ServicesView },
    { path: '/metal-roofing', component: MetalRoofingView },
    { path: '/painting-drywals', component: PaintingDrywalsView },
    { path: "/windows-doors", component: WindowsAndDoorsView },
    { path: "/landscaping", component: LandscapingView },
    { path: "/flooring", component: FlooringView },
    { path: "/platinum-pro-moving", component: PlatinumProMovingView },
    { path: "/:pathMatch(.*)*", component: NotFoundView },
]