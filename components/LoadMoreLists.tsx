'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
}

interface LoadMoreNewsListProps {
    articles: Article[];
    itemsPerPage: number;
}

export default function LoadMoreNewsList({ articles, itemsPerPage }: LoadMoreNewsListProps) {
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);
    const [showGoUp, setShowGoUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the "Go Up" button when the user scrolls near the bottom
            const nearBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            setShowGoUp(nearBottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLoadMore = () => {
        setVisibleItems((prev) => prev + itemsPerPage);
    };

    const handleGoUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const currentArticles = articles.slice(0, visibleItems);

    return (
        <div className="space-y-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {currentArticles.map((article, index) => (
                    <article
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col group"
                    >
                        {article.urlToImage && (
                            <div className="relative w-full pt-[56.25%] overflow-hidden">
                                <Image
                                    width={600}
                                    height={400}
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg 
                             transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    priority
                                    unoptimized={!article.urlToImage?.includes('trusted-domain.com')}

                                />
                            </div>
                        )}
                        <div className="p-4 sm:p-6 flex flex-col flex-grow transition-colors duration-300 ease-in-out group-hover:bg-gray-50/50">
                            <h2 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2 flex-grow text-black 
                             transition-colors duration-300 ease-in-out group-hover:text-indigo-700">
                                {article.title}
                            </h2>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                {article.description}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mt-auto pt-4 border-t border-gray-100">
                                <span className="text-xs text-gray-500 order-2 sm:order-1">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </span>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium order-1 sm:order-2 
                             transition-all duration-300 ease-in-out hover:translate-x-1"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Load More Button */}
            {visibleItems < articles.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* Go Up Button */}
            {showGoUp && (
                <button
                    onClick={handleGoUp}
                    className="fixed bottom-[6rem] right-8 md:bottom-[7rem] md:right-[14rem] bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                >
                    Go Up ↑
                </button>
            )}
        </div>
    );
}
