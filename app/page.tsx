import Post from '@/components/Post'
import { prisma } from '../lib/prisma'
import Link from 'next/link'

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

	console.log({ posts })

	return (
		<main className='min-h-screen'>
			<h1 className='text-3xl uppercase py-5 px-10 font-semibold'>
				Feed
			</h1>
      <Link href={'/addPost'}>Add A Post</Link>
			<div className='flex flex-wrap'>
				{posts.map((post, index) => (
					<Post
						key={index}
						id={post.id}
						title={post.title}
						content={post.content}
						published={post.published}
						authorId={post.authorId}
						authorName={post.author?.name}
					/>
				))}
			</div>
		</main>
	)
}
