# Paradise Nursery

Paradise Nursery — A simple React + Redux plant store demo.

Project structure includes components required for the assignment:
- README.md (this file)
- AboutUs.jsx (company info)
- App.css (landing page background)
- App.jsx (landing page with "Get Started" button, routes)
- ProductList.jsx (product listing, categories, Add to Cart)
- CartSlice.jsx (Redux slice for cart)
- CartItem.jsx (cart page with quantities, totals, delete, checkout)
- Navbar.jsx (Home, Plants, Cart with dynamic count)
- store.js, index.jsx (app bootstrap)

How to run
1. Create React app or add these files to an existing React app.
2. Install dependencies:
   npm install react-router-dom react-redux @reduxjs/toolkit
3. Ensure your index.jsx mounts the app and provider is set (see included index.jsx).
4. Start dev server: npm start

Notes
- Replace placeholder images (URLs) with actual images in public/assets if you want better visuals.
- The checkout button shows "Coming Soon" to satisfy the requirement.

Project author: sprom
