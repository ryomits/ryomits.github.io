import fs from "fs"
import path from "path"
import matter from "gray-matter"

const articleDirectory = path.join(process.cwd(), "articles")

export type Article = {
  name: string
  date: string
  title: string
  description: string | null
}

type ArticleMatterData = {
  date: Date
  title: string
  description: string | null
}

export function findArticles(): Article[] {
  return fs.readdirSync(articleDirectory)
    .map(fileName => {
      const filePath = path.join(articleDirectory, fileName)
      const content = fs.readFileSync(filePath)
      const articleMatterData = matter(content).data as ArticleMatterData

      return {
        name: fileName,
        date: articleMatterData.date.toString(),
        title: articleMatterData.title,
        description: articleMatterData.description,
      }
    })
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
