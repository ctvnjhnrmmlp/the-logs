'use client';

import accounts from '@/data/accounts';
import { getBlog } from '@/libraries/axios/axios';
import { Chip, Link } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { CiClock2 } from 'react-icons/ci';

export default function Blog({
	params,
}: {
	params: {
		id: string;
	};
}) {
	const {
		data: blog,
		error: blogError,
		status: blogStatus,
		fetchStatus: blogFetchStatus,
		refetch: refetchBlogs,
	} = useQuery({
		queryKey: ['weblog'],
		queryFn: () => getBlog(Number.parseInt(params.id)),
		refetchOnWindowFocus: true,
	});

	return (
		<main className='flex gap-40 min-h-screen flex-col items-center justify-between'>
			<section className='px-0 py-24 sm:py-32 sm:px-16'>
				{blogStatus === 'success' && (
					<div className='flex flex-col gap-8 md:gap-12 lg:gap-16'>
						<div className='flex justify-center'>
							<Chip
								variant='bordered'
								size='lg'
								className='text-xs sm:text-sm md:text-lg border-1 px-1 py-2 sm:px-4 sm:py-5 font-extralight leading-none'
								startContent={
									<p className='p-1 mt-0.5'>
										<CiClock2 />
									</p>
								}
							>
								<span className='block mt-1'>{blog.published_timestamp}</span>
							</Chip>
						</div>
						<div>
							<h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl uppercase text-center leading-none'>
								{blog.title}
							</h1>
						</div>
						<div className='flex justify-center gap-6 md:gap-8'>
							{accounts.map((account) => {
								return (
									<Link
										key={account.url}
										href={account.url}
										target='_blank'
										className={`text-2xl md:text-4xl text-white`}
									>
										<account.icon />
									</Link>
								);
							})}
						</div>
						<div>
							<Image
								className='rounded-xxl mx-auto w-11/12'
								width={100}
								height={100}
								src={blog.cover_image}
								alt={blog.slug}
								unoptimized
							/>
						</div>
						<div>
							<div
								dangerouslySetInnerHTML={{ __html: blog.body_html }}
								className='flex flex-col gap-12 text-xl sm:text-3xl blog-body-wrapper'
							></div>
						</div>
					</div>
				)}
			</section>
		</main>
	);
}
