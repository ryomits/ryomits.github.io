import { NextPage } from "next";
import {
  findArticleByName,
  type CompiledArticle,
  compileArticle,
  findArticles,
} from "../../lib/api"

type Props = {
  compiledArticle: CompiledArticle
}

const showArticle: NextPage<Props> = ({ compiledArticle }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: compiledArticle.body }}
      ></div>
    </>
  )
}

export default showArticle

export async function getStaticPaths() {
  const paths = findArticles().map(article => {
    return {
      params: {
        name: article.name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {params: { name: string }}) {
  const article = findArticleByName(params.name);
  const compiledArticle = await compileArticle(article)
  return {
    props: {
      compiledArticle
    }
  }
}
