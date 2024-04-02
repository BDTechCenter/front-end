import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface PaginatorURLProps{
  totalPages: number
}

export default function PaginatorURL({totalPages}: PaginatorURLProps) {
  const searchParams = useSearchParams()
	const tagsUrl = searchParams.get('tags')
	const pageUrl = searchParams.get('page')
	const page = tagsUrl ? `?tags=${tagsUrl}&page=` : "?page="

  const pageLinks = [];
  for (let i = 0; i < totalPages; i++) {
    pageLinks.push(
      <PaginationItem key={i}>
        <PaginationLink isActive={ Number(pageUrl) === i ? true : false} href={`${page}${i}`}>
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <Pagination>
					<PaginationContent>
						{pageLinks}
					</PaginationContent>
				</Pagination>
    </div>
  )
}
