import type { NextPage } from 'next'
import Link from 'next/link'
import { findArticles, type Article } from '../lib/api'

type Props = {
  articles: Article[]
}

const Index: NextPage<Props> = ({ articles }) => {
  return (
    <nav>
      <ul>
        {articles.map(article => (
            <li key={article.name}>
              <time>{article.date}</time>
              <Link href={`/articles/${article.name}`}>
                {article.title}
              </Link>
            </li>
        ))}
      </ul>
    </nav>
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
