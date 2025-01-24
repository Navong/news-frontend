import { Article } from "@/type/article";

export async function fetchNews(category: string) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
        const res = await fetch(`${baseUrl}/api/news/${category}`);
        if (!res.ok) throw new Error("Failed to fetch news.");
        return res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchArticleById(id: string, category: string) {
    try {
        const news = await fetchNews(category);
        const article = news.articles.find((article: Article) => article.url === id);
        return article || null;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

