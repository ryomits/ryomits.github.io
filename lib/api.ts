import fs from "fs"
import path from "path"
import matter from "gray-matter"
import dayjs from "dayjs"
import markdownToHtml from "zenn-markdown-html"

const articleDirectory = path.join(process.cwd(), "articles")

export type CompiledArticle = Article & {
  body: string
}

export type Article = {
  name: string
  date: string
  title: string
  description: string | null
  content: string
}

type ArticleMatterData = {
  date: Date
  title: string
  description: string | null
}

export function findArticles(): Article[] {
  return fs.readdirSync(articleDirectory)
    .map(fileName => findArticleByName(path.basename(fileName, '.md')))
    .sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
}

export function findArticleByName(name: string): Article {
  const filePath = path.join(articleDirectory, `${name}.md`);
  const content = fs.readFileSync(filePath)
  const articleMatter = matter(content)
  const articleMatterData = articleMatter.data as ArticleMatterData

  return {
    name,
    date: dayjs(articleMatterData.date).format('YYYY年MM月DD日'),
    title: articleMatterData.title,
    description: articleMatterData.description,
    content: articleMatter.content,
  }
}

export function compileArticle(article: Article): CompiledArticle {
  const compiledResult = markdownToHtml(article.content)

  return {
    ...article,
    body: compiledResult
  }
}
