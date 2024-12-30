import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { PaymentsComponent } from './payments/payments.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ReviewComponent } from './review/review.component';

export const routes: Routes = [

    { path: "review", component: ReviewComponent },
    { path: "suppliers", component: SuppliersComponent },
    { path: "payments", component: PaymentsComponent },
    { path: "orderitems", component: OrderItemsComponent },
    { path: "orders", component: OrdersComponent },
    { path: "customers", component: CustomersComponent },
    { path: "products", component: ProductsComponent },
    { path: "header", component: HeaderComponent },
    { path: "signup", component: SignupComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "login", component: LoginComponent },
    { path: "*", redirectTo: "/login" }
];
