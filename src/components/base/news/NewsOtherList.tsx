"use client"
import React from 'react'
import NewsCard from './NewsCard';
import ImageError from '../common/ImageError';
import { NewsCardSkeleton } from '../skeleton/NewsCardSkeleton';
import { useFetchGetNewsOutherNews } from '@/api/hooks/news/queries';
import { Error } from '@/api/types/all/type';
import NewsOuther from './NewsOther';
import NewsOtherSkeleton from '../skeleton/NewsOtherSkeleton';

export interface NewsOutherListProps{
	massageError: Error
} 

export default function NewsOtherList({massageError}: NewsOutherListProps) {
  const { isLoading, isError, data } = useFetchGetNewsOutherNews()
  const newsCards = () => {
		return (data?.length !== 0 ? (
			<div className='flex flex-col gap-5'>
				{data?.map((news) => (
					<NewsOuther key={news.id} data={news} />
				))}
			</div>
		) : (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={massageError} />
			</div>
		));
	};

	if (isLoading) {
		return (
			<div className='flex flex-col gap-5'>
				<NewsOtherSkeleton />
				<NewsOtherSkeleton />
				<NewsOtherSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={massageError} />
			</div>
		);
	}

	if (data) {
		return newsCards();
	}

	return null;
}
