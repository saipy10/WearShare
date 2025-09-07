# 👕 WearShare – Community Clothing Exchange

WearShare is a sustainable fashion platform that empowers users to exchange their unused clothing through **direct swaps** or a **point-based redemption system**. Our mission is to promote eco-conscious choices, reduce textile waste, and create a vibrant community-driven ecosystem for wearable clothing reuse.

## 🌐 Live Demo

Coming Soon...

---

## Preview

<img width="1347" height="678" alt="image" src="https://github.com/user-attachments/assets/65959b30-229d-4b55-9482-3a9def99579d" />
<img width="1347" height="680" alt="image" src="https://github.com/user-attachments/assets/21b0d9b3-0437-427b-ba87-32447265bbda" />
<img width="1347" height="679" alt="image" src="https://github.com/user-attachments/assets/895a63f0-567c-48e7-a2fe-2da6651c9d5d" />
<img width="1346" height="682" alt="image" src="https://github.com/user-attachments/assets/06319e7a-c9fc-4e61-9d68-3b9f8a3a0891" />
<img width="1350" height="679" alt="image" src="https://github.com/user-attachments/assets/256b97cb-99ed-4add-85e0-9583ed87d5e4" />
<img width="1349" height="675" alt="image" src="https://github.com/user-attachments/assets/01421f1e-2ffb-45e4-9a9b-c41afc31de10" />



## ✨ Features

### 👤 User Authentication

* Email/password-based sign-up and login
* User session management via Supabase

### 🏠 Landing Page

* Introduction to the WearShare platform
* CTAs: “Start Swapping”, “Browse Items”, “List an Item”
* Featured items carousel

### 🧑‍💼 User Dashboard

* Profile and points overview
* List of uploaded items
* Ongoing and completed swaps

### 👗 Item Detail Page

* Multiple image gallery
* Full item description
* Uploader profile and options:

  * Swap Request
  * Redeem via Points
* Item availability status

### ➕ Add New Item

* Upload item images
* Input fields: title, description, category, type, size, condition, tags
* Submit listing for review



## 🛠 Tech Stack

| Technology                             | Purpose                                    |
| -------------------------------------- | ------------------------------------------ |
| **Next.js**                            | Frontend and SSR framework                 |
| **Tailwind CSS**                       | Styling and responsive UI                  |
| **MongoDB**                            | NoSQL database for storing items and users |
| **Supabase**                           | Session handling                           |
| **Shadcn/UI**                          | Prebuilt React components and UI           |
| **Lucide Icons**                       | Icons used across the platform             |
| **Cloudinary / ImageKit**              | For optimized image uploads                |
| **Web3**                               | Blockchain Based Transactions              |
| **Gemini Nano Banana**                 | AI Tryouts                                 |
---



## 🧪 Installation & Development

```bash
# Clone the repository
git clone https://github.com/saipy10/WearShare.git

# Install dependencies
npm install

# Add your environment variables
cp .env.example .env.local

# Run the app
npm run dev
```

---

## 🔐 Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ADMIN_EMAIL=admin@example.com
GEMINI_API_KEY=geminiapikey
```

---

## 📦 Use Cases

* **For Users**: Exchange clothes easily without spending money, build eco-conscious habits, and earn points.
* **For NGOs**: Create donation-based listings and reach local communities.
---

## 🌱 Future Scope

* ♻️ **Automated Matching System**: Suggest matches based on item size, condition, and tags.
* 📦 **Logistics Integration**: Tie-up with local delivery services for optional doorstep pickup/drop.
* 📊 **Analytics Dashboard**: Impact metrics like carbon offset or clothes saved from landfill.
* 🧵 **Garment Repair/Tailor Network**: Support local artisans by offering alteration services.
* 🌍 **Community Forum**: Tips on sustainable fashion, upcycling, and events.
* 📱 **Mobile App**: PWA or native app for wider reach and convenience.

---


## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## ✨ Acknowledgements

* Built using [Next.js](https://nextjs.org/)
* Authentication via [Supabase](https://supabase.com/)
* Styled with [Tailwind CSS](https://tailwindcss.com/)
* UI components powered by [shadcn/ui](https://ui.shadcn.com/)
