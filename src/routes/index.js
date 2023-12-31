import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Category from "../pages/category/Category.vue";
import AddCategory from "../pages/category/AddCategory.vue";
import Employee from "../pages/employee/Employee.vue";
import AddEmployee from "../pages/employee/AddEmployee.vue";
import Service from "../pages/service/Service.vue";
import AddService from "../pages/service/AddService.vue";
import Contact from "../pages/contact/Contact.vue";
import AddContact from "../pages/contact/AddContact.vue";
import Newsletter from "../pages/newsletter/Newsletter.vue";
import AddBlogCategory from "../pages/blog/blog-category/AddBlogCategory.vue";
import BlogCategory from "../pages/blog/blog-category/BlogCategory.vue";

const routes = [
    { path: "/", redirect: { name: 'Home' } },
    { path: "/home", name: "Home", component: Home },
    { path: "/category", name: "Category", component: Category },
    { path: "/add-category", name: "AddCategory", component: AddCategory },
    { path: "/employee", name: "Employee", component: Employee },
    { path: "/add-employee", name: "AddEmployee", component: AddEmployee },
    { path: "/service", name: "Service", component: Service },
    { path: "/add-service", name: "AddService", component: AddService },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/add-contact", name: "AddContact", component: AddContact },
    { path: "/newsletter", name: "Newsletter", component: Newsletter },
    { path: "/blog-category", name: "BlogCategory", component: BlogCategory },
    { path: "/add-blog-category", name: "AddBlogCategory", component: AddBlogCategory }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
