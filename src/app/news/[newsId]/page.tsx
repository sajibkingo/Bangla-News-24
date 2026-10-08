import React from 'react';

const NewsDetails = async ({params}: {params: {newsId:string}}) => {
    const {newsId} = await params;
    const res = await fetch (`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();
    const news = data.data;

    return (
        <div>
            <h2>{news.title}</h2>
        </div>
    );
};

export default NewsDetails;