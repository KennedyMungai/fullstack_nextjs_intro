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
		<div className='border border-white rounded-md p-5'>
			<h3>{authorName}</h3>
			<h4>{title}</h4>
			<p>{content}</p>
		</div>
	)
}

export default Post
