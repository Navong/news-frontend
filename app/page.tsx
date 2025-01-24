
import { Suspense } from 'react';
import LoadMoreNewsList from '@/components/LoadMoreLists';
import { fetchNews } from '../lib/fetchNews';
import Header from '@/components/Header';
import SkeletonLoader from '@/components/SkeletonLoader';
import { Article } from '@/type/article';

export const revalidate = 60;

const ITEMS_PER_PAGE = 6;

export default async function Home() {
    const newsPromise = fetchNews('general');

    return (
        <main className="p-6">
            <Header category={"Top Headlines"} />
            <Suspense fallback={<SkeletonLoader />}>
                {/* Wrap LoadMoreNewsList in a dynamic wrapper to allow client-side rendering */}
                <NewsWrapper newsPromise={newsPromise} />
            </Suspense>
        </main>
    );
}

type NewsPromise = Promise<{ articles: Article[] }>;

async function NewsWrapper({ newsPromise }: { newsPromise: NewsPromise }) {
    const news = await newsPromise;
    const filteredArticles = news.articles.filter(article => article.urlToImage !== null);
    return <LoadMoreNewsList articles={filteredArticles} itemsPerPage={ITEMS_PER_PAGE} />;
}
