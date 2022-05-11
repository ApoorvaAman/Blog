import { Props } from '../api-types'
import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'

const BlogCard: FC<Props> = ({ blogs }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 mt-4 `}>
      {blogs.map(({ id, title, coverImage, slug }) => {
        return (
          <Link href={`posts/${slug}`} key={id}>
            <a>
              <div className='h-auto' key={id}>
                <Image
                  src={coverImage.url}
                  alt='Cover Image'
                  layout='responsive'
                  width={1600}
                  height={900}
                  key={id}
                />
                <h1 key={id}>{title}</h1>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default BlogCard
