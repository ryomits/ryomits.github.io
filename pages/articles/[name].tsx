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
    <article>
      <time>{compiledArticle.date}</time>
      <h1>{compiledArticle.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: compiledArticle.body }}
      ></div>
    </article>
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
  const compiledArticle = compileArticle(article)
  return {
    props: {
      compiledArticle
    }
  }
}
