
# News Website - ISR + SPA with Skeleton Loading
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js)](https://nextjs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/) [![Zustand](https://img.shields.io/badge/Zustand-Latest-orange?style=flat)](https://github.com/pmndrs/zustand) [![pnpm](https://img.shields.io/badge/pnpm-7.10.0-blue?style=flat)](https://pnpm.io/) [![Vercel](https://img.shields.io/badge/Vercel-Deployed-green?style=flat)](https://vercel.com/)

A modern, performant news website leveraging Next.js App Router with Incremental Static Regeneration (ISR), Single Page Application (SPA) capabilities, and skeleton loading for optimal user experience.

## 📑 Table of Contents

1.  [Key Features](#key-features)
2.  [Tech Stack](#tech-stack)
3.  [Installation](#installation)
4.  [Core Implementation](#core-implementation)
    -   [ISR Configuration](#isr-configuration)
    -   [Skeleton Loading](#skeleton-loading)
5.  [Key Implementation Details](#key-implementation-details)
6.  [What I Learned and How I Solved It](#what-i-learned-and-how-i-solved-it)
7.  [Future Improvements](#future-improvements)
8.  [Contributing](#contributing)
9.  [License](#license)
10.  [Contact](#contact)

## Key Features

-   **Incremental Static Regeneration (ISR):**  
    Automatically regenerates static pages every 60 seconds, balancing content freshness and performance while optimizing server load.
    
-   **Single Page Application (SPA):**  
    Offers seamless client-side navigation without full-page reloads, enhancing user experience.
    
-   **Skeleton Loading:**  
    Provides polished loading states to reduce perceived load time and improve content transitions.
    
-   **Smart Pagination:**  
    Features dynamic pagination, customizable items per page, and intuitive navigation controls.
    
-   **Responsive Design:**  
    Implements a mobile-first approach with adaptive layouts for cross-device compatibility.
    

## Tech Stack

-   **Frontend Framework:** Next.js (App Router)
-   **State Management:** Zustand
-   **Styling:** Tailwind CSS
-   **Data Source:** News API
-   **Deployment:** Vercel

## Installation

1.  **Clone the repository**

```bash
git clone https://github.com/your-username/news-web.git  
cd news-web  

```

2.  **Install dependencies**

```bash
npm install  
# or  
yarn install  

```

3.  **Configure environment variables**  
    Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key  

```

4.  **Start the development server**

```bash
npm run dev  
# or  
yarn dev  

```

5.  **View the application**  
    Open [http://localhost:3000](http://localhost:3000/) in your browser.

## Core Implementation

### ISR Configuration

```tsx
export const revalidate = 60; // 60-second revalidation  

export default async function CategoryPage({ params }: { params: { category: string } }) {  
  const newsPromise = fetchNews(params.category);  
  return (  
    <Suspense fallback={<SkeletonLoader />}>  
      <PaginatedNewsWrapper newsPromise={newsPromise} />  
    </Suspense>  
  );  
}  

```

### Skeleton Loading

```tsx
export default function SkeletonLoader() {  
  return (  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
      {Array.from({ length: 6 }).map((_, index) => (  
        <div key={index} className="bg-gray-200 animate-pulse rounded p-4">  
          <div className="h-48 bg-gray-300 rounded mb-4"></div>  
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>  
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>  
        </div>  
      ))}  
    </div>  
  );  
}  

```

## Key Implementation Details

### State Management

-   Zustand is used for lightweight and scalable state management.
-   A centralized store manages pagination and filters efficiently with minimal re-renders.

### Responsive Design

-   Tailwind CSS breakpoints ensure seamless adaptability across devices.

### Performance Optimization

-   The Next.js Image component optimizes images and minimizes bundle size.
-   Lazy loading ensures efficient content delivery.

## What I Learned and How I Solved It

1.  **Balancing Content Freshness and Performance:**  
    ISR with a 60-second revalidation period enabled delivering fresh content while maintaining performance.
    
2.  **Improving Loading Experience:**  
    Skeleton loading reduced perceived load time and offered a smoother user experience.
    
3.  **Ensuring Mobile Responsiveness:**  
    A mobile-first design approach and Tailwind CSS breakpoints helped achieve adaptability for various screen sizes.
    
4.  **Optimizing Images:**  
    Leveraged the Next.js `Image` component to improve Largest Contentful Paint (LCP).
    

## Future Improvements

-   **Search Enhancements:** Advanced filtering, real-time suggestions, and search history.
-   **User Features:** Authentication, personalized news feeds, and saved articles.
-   **Performance:** Offline support, service workers, and push notifications.
-   **UI/UX Improvements:** Dark mode, reading time estimates, and enhanced sharing options.

## Contributing

1.  Fork the repository.
2.  Create your feature branch: `git checkout -b feature/AmazingFeature`.
3.  Commit your changes: `git commit -m 'Add AmazingFeature'`.
4.  Push to the branch: `git push origin feature/AmazingFeature`.
5.  Open a Pull Request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contact

-   **Project Repository:** [GitHub Link](https://github.com/your-username/news-website)
-   **Email:** [bongchannavong@outlook.com](mailto:bongchannavong@outlook.com)

