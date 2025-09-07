# 👕 WearShare – Community Clothing Exchange

WearShare is a sustainable fashion platform that empowers users to exchange their unused clothing through **direct swaps** or a **point-based redemption system**. Our mission is to promote eco-conscious choices, reduce textile waste, and create a vibrant community-driven ecosystem for wearable clothing reuse.

## 🌐 Live Demo

Coming Soon...

---

## Preview

<img width="1347" height="682" alt="image" src="https://github.com/user-attachments/assets/e54834c7-5544-43f1-bd7d-468758368997" />
<img width="1349" height="680" alt="image" src="https://github.com/user-attachments/assets/9058a8bd-56e2-4dab-856c-6391f9ef7ca1" />
<img width="1351" height="681" alt="image" src="https://github.com/user-attachments/assets/322c5da8-cdf2-4064-adac-fdc8b383ec47" />
<img width="1350" height="677" alt="image" src="https://github.com/user-attachments/assets/1fbe28b0-8df7-454f-80ae-1d6e731fdd4c" />
<img width="1350" height="677" alt="image" src="https://github.com/user-attachments/assets/bdba50f4-8fac-49b8-9499-58625288a53e" />
<img width="1365" height="680" alt="image" src="https://github.com/user-attachments/assets/99cfd709-0232-47ae-ace1-832195ab0a68" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/a9b2c285-ad53-4089-8292-5f4061bbf438" />
<img width="1365" height="680" alt="image" src="https://github.com/user-attachments/assets/0811ce4d-c013-48de-ab4f-2a2e24bdd64d" />
<img width="1347" height="678" alt="image" src="https://github.com/user-attachments/assets/d06d1cbf-c836-4708-a270-d2d73fc38931" />
<img width="1351" height="682" alt="image" src="https://github.com/user-attachments/assets/2a636080-5f2a-4fa1-910a-8825f7ec7da9" />
<img width="1349" height="680" alt="image" src="https://github.com/user-attachments/assets/16cb2214-e85c-4456-92b4-af80b6531670" />


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
