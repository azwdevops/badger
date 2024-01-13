import API from "@/lib/axios";
import Link from "next/link";
import React from "react";

export const getArticles = async () => {
  const response = await API.get("/api/v1/articles");
  const articles = response.data.data;
  return articles;
};

const Home = async () => {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-2">
      {articles.map((article_item) => (
        <div key={article_item.id} className="p-2 bg-white">
          <h1 className="font-bold text-xl">{article_item.attributes.title}</h1>
          <p>{article_item.attributes.body}</p>
          <Link
            href={`/articles/${article_item.id}`}
            className="text-xs text-indigo-500"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
