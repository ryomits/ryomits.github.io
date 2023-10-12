import { NextPage } from "next";
import { Text, Heading } from "@primer/react"
import { MarkdownViewer } from "@primer/react/drafts"
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
      <Text as="time">{compiledArticle.date}</Text>
      <Heading as="h1">{compiledArticle.title}</Heading>
      <MarkdownViewer
        dangerousRenderedHTML={{ __html: compiledArticle.body }}
      />
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
