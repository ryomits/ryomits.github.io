import type { NextPage } from 'next'
import Link from 'next/link'
import { findArticles, type Article } from '../lib/api'

type Props = {
  articles: Article[]
}

const Index: NextPage<Props> = ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <ol key={article.name}>
          {article.date}
          <Link href={`/articles/${article.name}`}>
            {article.title}
          </Link>
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
