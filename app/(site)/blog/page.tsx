import Container from "@/app/_components/Container";
import React from "react";
import CategoriesFeed from "./_components/CategoriesFeed";
import Filter from "./_components/Filter";
import SuspenseComponent from "@/components/SuspensComponent";
import BlogsFeed from "./_components/BlogsFeed";
import Breadcrumbs from "@/app/_components/BreadCrumps";

type Props = {
  searchParams: Promise<{
    category: string | undefined;
    topic: string[] | undefined;
    blogStyle: string[] | undefined;
    pageNumber:string | undefined
  }>;
};


export const revalidate = 0

const page = async ({ searchParams }: Props) => {
  const { category, topic, blogStyle,pageNumber } = await searchParams;
  let usedPageNumber = +(pageNumber ?? 1)
  if (
    !usedPageNumber ||
    isNaN(Number(usedPageNumber)) ||
    Number(usedPageNumber) < 1 ||
    !Number.isInteger(Number(usedPageNumber))
  ) {
    console.warn("Invalid page param::", pageNumber);
    usedPageNumber = 1;
  }
  return (
    <div className="p-3">
      <Container>
      <Breadcrumbs
      categorySlug={category}
    
      className="mb-10"
      items={[{title:'Home',href:'/'},{title:'Blog',href:'/blog'}]}
      />
      </Container>
 
      <CategoriesFeed category={category} />
      <Container className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mt-12 gap-2">
        {/* filter */}
        <SuspenseComponent className="" key={category}>
          <Filter category={category} topic={topic} blogStyle={blogStyle} />
        </SuspenseComponent>

        {/* blogs */}
        <div className="md:col-span-2 xl:col-span-4">
          <SuspenseComponent>
            <BlogsFeed postType={blogStyle} subCategory={topic} category={category} pageNumber={+usedPageNumber}/>
          </SuspenseComponent>
        </div>
      </Container>
    </div>
  );
};

export default page;
