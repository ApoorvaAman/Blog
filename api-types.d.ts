import type { RichTextContent } from '@graphcms/rich-text-types'

export declare type Props = {
  blogs: Blog[]
}

export declare type Blog = {
  id: string
  slug: string
  title: string
  post?: Post
  coverImage: CoverImage
  publishedAt: string
  updatedAt?: string
}

export declare type CoverImage = {
  url: string
}

export declare type Post = {
  json: RichTextContent
}
