import React from 'react'

type Props = {
	id: string
	title: string
	content: string
	published: boolean
	authorId: string
	authorName: string
}

const Post = ({
	authorId,
	authorName,
	content,
	id,
	published,
	title
}: Props) => {
	return (
		<div className='border border-white rounded-md p-5 w-[30vw] m-5'>
			<div className='flex flex-col items-center'>
				<h3 className='text-3xl uppercase font-bold'>{title}</h3>
				<h4 className='text-2xl font-semibold'>{content}</h4>
			</div>

			<p className='text-sm text-right'> - {authorName}</p>
		</div>
	)
}

export default Post
