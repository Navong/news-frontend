// @typescript-eslint/no-explicit-any
import { Suspense } from 'react';
import { fetchNews } from '../../lib/fetchNews';
import Header from '@/components/Header';
import SkeletonLoader from '@/components/SkeletonLoader';
import { Article } from '@/type/article';
import LoadMoreNewsList from '@/components/LoadMoreLists';

export const revalidate = 60; // Revalidate every 60 seconds
const ITEMS_PER_PAGE = 9;

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const data = await params;
    const newsPromise = fetchNews(data.category)

    return (
        <main className="p-6">
            {/* Render the header immediately */}
            <Header category={data.category} />

            {/* Render the PaginatedNewsList with a loading fallback */}
            <Suspense fallback={<SkeletonLoader />}>
                {/* Wrap PaginatedNewsList in a dynamic wrapper to allow client-side rendering */}
                <NewsWrapper newsPromise={newsPromise} />
            </Suspense>
        </main>
    );
}

// Client-side wrapper for PaginatedNewsList

type NewsPromise = Promise<{ articles: Article[] }>;

async function NewsWrapper({ newsPromise }: { newsPromise: NewsPromise }) {
    const news = await newsPromise;
    const filteredArticles = news.articles.filter(article => article.urlToImage !== null);
    return <LoadMoreNewsList articles={filteredArticles} itemsPerPage={ITEMS_PER_PAGE} />;
}

