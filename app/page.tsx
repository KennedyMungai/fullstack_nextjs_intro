import { prisma } from '../lib/prisma'

async function getPosts() {
	const posts = await prisma.post.findMany({
		where: { published: true },
		include: {
			author: {
				select: { name: true }
			}
		}
	})

  return posts
}

export default async function Home() {
  const posts = await getPosts()

  console.log(posts)

	return (
		<main className='min-h-screen'>
			<h1 className='text-3xl uppercase py-5 px-10 font-semibold'>
				Feed
			</h1>
		</main>
	)
}
