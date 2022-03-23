import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const CategoryPage: NextPage = () => {
  return <div>Category</div>;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [
    { params: { category: "men" } },
    { params: { category: "woman" } },
    { params: { category: "kid" } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      w: "a",
    },
  };
};

export default CategoryPage;
