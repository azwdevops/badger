import API, { setCSRF } from "@/lib/axios";

export async function getStaticPaths() {
  await setCSRF();
  const response = await API.get("/api/v1/articles");

  const paths = response.data.data.map((article) => ({
    params: { id: `${article.id}` },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getArticle({ params }) {
  await setCSRF();
  console.log("################");
  const response = await API.get(`/api/v1/articles/${params.id}`);
  const article = response.data.data;

  return {
    props: {
      article,
    },
  };
}

const Article = async () => {
  // console.log(article);
  const article = await getArticle();
  return <div></div>;
};

export default Article;
