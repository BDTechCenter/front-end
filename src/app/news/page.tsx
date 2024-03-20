"use client"
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import NewsList from "@/components/base/news/NewsList";
import SearchBar from "@/components/base/news/SearchBar";
import { useFetchGetNews } from "@/api/hooks/news/queries";
import { ModalCreateNews } from "@/components/base/news/ModalCreateNews";
import { useSearchParams } from "next/navigation";

export default function NewsPage() {
    const searchParams = useSearchParams()
    const tags = searchParams.get('tags')

    const { isLoading, isError, data } = useFetchGetNews(tags ? tags : "")

    return (
        <main className="w-full h-full">
            <NavBar variant="black" />
            <div className="relative">
                <TopBanner text={dataNewsPage.bannerNews} className="flex w-1/2 justify-center items-center">
                    <ModalCreateNews />
                </TopBanner>
                <div className="w-[70%] mx-auto absolute left-0 right-0 -bottom-7 z-10">
                    <SearchBar />
                </div>
            </div>
            <section className="my-24 mx-28 h-full 2xl:mx-44 2xl:my-36">
                <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
                    <NewsList
                        isLoading={isLoading}
                        isError={isError}
                        data={data?.content}
                        massageError={dataNewsPage.newsErrorNotFound}
                        massageNotFound={dataNewsPage.newsErrorNotFound}
                    />
                </div>
            </section>
        </main>
    );
}

export const dataNewsPage = {
    bannerNews: (
        <p>
            Follow the main <span className="text-bdlightpurple">news</span> of
            the moment...
        </p>
    ),
    newsErrorNotFound: {
        text: "News not found",
        img: "/noFilter.gif",
    },

    newsError: {
        text: "Error News",
        img: "/allError.gif",
    },
};
