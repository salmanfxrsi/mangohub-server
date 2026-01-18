# MangoHub Server 🍋

MangoHub Server is a **backend API** built with **Node.js, Express, and MongoDB** for managing users, mango products and orders.  
It is designed as a scalable e-commerce backend for a mango store application.

---

## Features
- User management (register, login, roles)  
- Mango product management (CRUD operations)  
- Order management (create, track, update)  
- Role-based access control (`user` vs `admin`)  
- Fully ready for future expansion (additional collections, endpoints)

---

## Collections

### 1. User
Stores all users of the system.

| Field     | Type                   | Description                        |
|-----------|------------------------|------------------------------------|
| `name`    | String                 | User's full name                   |
| `email`   | String (unique)        | User's email                       |
| `phone`   | String                 | User's phone number                |
| `password`| String                 | Hashed password                    |
| `role`    | String (`user`/`admin`)| User role                          |

---

### 2. Mango
Stores all mango products.

| Field      | Type     | Description                        |
|------------|----------|------------------------------------|
| `name`     | String   | Mango name                         |
| `image`    | String   | URL of the mango image             |
| `variety`  | String   | Mango variety (e.g., Alphonso)     |
| `price`    | Number   | Price per unit                     |
| `stock`    | Number   | Quantity in stock                  |
| `origin`   | String   | Origin location                    |
| `season`   | String   | Mango season                       |

---

### 3. Order
Stores all orders placed by users.

| Field       | Type     | Description                          |
|-------------|----------|--------------------------------------|
| `userId`    | ObjectId | Reference to the user who ordered    |
| `mangoId`   | ObjectId | Reference to the mango ordered       |
| `quantity`  | Number   | Quantity of mangoes ordered          |
| `totalPrice`| Number   | Total price of this order            |
| `status`    | String   | Order status (`pending`, `completed`)|

---

## API Endpoints

### Users
- `POST /api/users/register` → Register a new user  
- `POST /api/users/login` → User login  
- `GET /api/users/:id` → Get user details  

### Mango Products
- `POST /api/mangos` → Add new mango (admin only)  
- `GET /api/mangos` → List all mangoes  
- `GET /api/mangos/:id` → Get mango by ID  
- `PUT /api/mangos/:id` → Update mango (admin only)  
- `DELETE /api/mangos/:id` → Delete mango (admin only)  

### Orders
- `POST /api/orders` → Create new order  
- `GET /api/orders` → List all orders (admin only)  
- `GET /api/orders/:id` → Get order by ID  
- `PUT /api/orders/:id` → Update order status (admin only)  

---

## Installation

```bash
git clone https://github.com/salmanfxrsi/mangohub-server.git
cd mangohub-server
npm install
