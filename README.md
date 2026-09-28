This is a hotel-booking application with a public customer client, an administrative dashboard, and an Express/Mongoose API. Customers can browse listings and hotel details and access login/registration; administrators manage users, hotels, and rooms behind a login gate. The API exposes authentication, user, hotel, and room route groups, while sampled controllers show credential handling and model access. The route and page implementations were not sampled, so uncertain page-to-fetch and route-to-controller wiring is omitted.

## 🧱 Architecture Overview

<img width="10919" height="2930" alt="diagram" src="https://github.com/user-attachments/assets/33460a96-9017-4829-9d30-f97da1fb5f66" />

## 📁 Structure

```
Directory structure:
└── nourchene-hamrita-bookingapp/
    ├── README.md
    ├── admin/
    │   ├── package.json
    │   ├── public/
    │   │   └── index.html
    │   └── src/
    │       ├── App.js
    │       ├── datatablesource.js
    │       ├── formSource.js
    │       ├── index.js
    │       ├── components/
    │       │   ├── chart/
    │       │   │   ├── Chart.jsx
    │       │   │   └── chart.scss
    │       │   ├── datatable/
    │       │   │   ├── Datatable.jsx
    │       │   │   └── datatable.scss
    │       │   ├── featured/
    │       │   │   ├── Featured.jsx
    │       │   │   └── featured.scss
    │       │   ├── navbar/
    │       │   │   ├── Navbar.jsx
    │       │   │   └── navbar.scss
    │       │   ├── sidebar/
    │       │   │   ├── Sidebar.jsx
    │       │   │   └── sidebar.scss
    │       │   ├── table/
    │       │   │   ├── Table.jsx
    │       │   │   └── table.scss
    │       │   └── widget/
    │       │       ├── Widget.jsx
    │       │       └── widget.scss
    │       ├── context/
    │       │   ├── AuthContext.js
    │       │   ├── darkModeContext.js
    │       │   └── darkModeReducer.js
    │       ├── hooks/
    │       │   └── useFetch.js
    │       ├── pages/
    │       │   ├── home/
    │       │   │   ├── Home.jsx
    │       │   │   └── home.scss
    │       │   ├── list/
    │       │   │   ├── List.jsx
    │       │   │   └── list.scss
    │       │   ├── login/
    │       │   │   ├── Login.jsx
    │       │   │   └── login.scss
    │       │   ├── new/
    │       │   │   ├── New.jsx
    │       │   │   └── new.scss
    │       │   ├── newHotel/
    │       │   │   ├── NewHotel.jsx
    │       │   │   └── newHotel.scss
    │       │   ├── newRoom/
    │       │   │   ├── NewRoom.jsx
    │       │   │   └── newRoom.scss
    │       │   └── single/
    │       │       ├── Single.jsx
    │       │       └── single.scss
    │       └── style/
    │           └── dark.scss
    ├── api/
    │   ├── index.js
    │   ├── package.json
    │   ├── controllers/
    │   │   ├── auth.js
    │   │   ├── hotel.js
    │   │   ├── room.js
    │   │   └── user.js
    │   ├── models/
    │   │   ├── Hotel.js
    │   │   ├── Room.js
    │   │   └── User.js
    │   ├── routes/
    │   │   ├── auth.js
    │   │   ├── hotels.js
    │   │   ├── rooms.js
    │   │   └── users.js
    │   └── utils/
    │       ├── error.js
    │       └── verifyToken.js
    └── client/
        ├── package.json
        ├── public/
        │   └── index.html
        └── src/
            ├── App.js
            ├── index.js
            ├── responsive.js
            ├── components/
            │   ├── featured/
            │   │   ├── featured.css
            │   │   └── Featured.jsx
            │   ├── featuredProperties/
            │   │   ├── featuredProperties.css
            │   │   └── FeaturedProperties.jsx
            │   ├── footer/
            │   │   ├── footer.css
            │   │   └── Footer.jsx
            │   ├── header/
            │   │   ├── header.css
            │   │   └── Header.jsx
            │   ├── mailList/
            │   │   ├── mailList.css
            │   │   └── MailList.jsx
            │   ├── navbar/
            │   │   ├── navbar.css
            │   │   └── Navbar.jsx
            │   ├── propertyList/
            │   │   ├── propertyList.css
            │   │   └── PropertyList.jsx
            │   ├── reserve/
            │   │   ├── reserve.css
            │   │   └── Reserve.jsx
            │   └── searchItem/
            │       ├── searchItem.css
            │       └── SearchItem.jsx
            ├── context/
            │   ├── AuthContext.js
            │   └── SearchContext.js
            ├── hooks/
            │   └── useFetch.js
            └── pages/
                ├── home/
                │   ├── home.css
                │   └── Home.jsx
                ├── hotel/
                │   ├── hotel.css
                │   └── Hotel.jsx
                ├── list/
                │   ├── list.css
                │   └── List.jsx
                ├── login/
                │   ├── login.css
                │   └── login.jsx
                └── register/
                    ├── register.css
                    └── register.jsx

