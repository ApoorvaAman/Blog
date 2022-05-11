import { gql, GraphQLClient } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Props } from '../api-types'
import BlogCard from '../components/BlogCard'

const Home: NextPage<Props> = ({ blogs }: Props) => {
  console.log(blogs)
  return (
    <div className='max-w-5xl mx-auto'>
      <Head>
        <title>Blog | Apoorva Aman</title>
      </Head>
      <BlogCard blogs={blogs} />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      blogs {
        id
        title
        slug
        coverImage {
          url
        }
        updatedAt
      }
    }
  `
  const client = new GraphQLClient(process.env.API_ENDPOINT!)
  const data: Props = await client.request(query)
  const blogs = data.blogs
  return {
    props: {
      blogs,
    },
  }
}
