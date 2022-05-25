import type { NextPage } from 'next'
import { findArticles, type Article } from '../lib/api'

type Props = {
  articles: Article[]
}

const Index: NextPage<Props> = ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <ol key={article.name}>
          {article.title}
        </ol>
      ))}
    </>
  )
}

export default Index

export async function getStaticProps() {
  return {
    props: {
      articles: findArticles(),
    }
  }
}
