import FilterItem from "@/components/FilterItem";
import prisma from "@/lib/prisma";
import React from "react";

type Props = { category: string | undefined,topic:string[] | undefined,blogStyle:string[] | undefined };

const Filter = async ({ category,topic, blogStyle }: Props) => {
  const subCateogryRes = prisma.subCategory.findMany({
    ...(category && {
      where: {
        category: {
          slug: category,
        },
      },
    }),
  });

  const postTypeRes = prisma.postType.findMany()

  const [subCateogry, postTypes] = await Promise.all([subCateogryRes,postTypeRes])

  return (
    <div className="">
      <p className="text-md font-[500] capitalize">Filter</p>
      <div className="mt-8">
        {/* topic */}
    <div>
        <p className="font-[500] capitalize">Topic</p>
        <div className="mt-2 max-h-[500px] overflow-y-auto">
        {subCateogry.map((item) => (
          <FilterItem
            key={item.id}
            param="topic"
            title={item.name}
            value={item.slug}
            isChecked={topic ? topic.includes(item.slug) : false}
          />
        ))}
        </div>
    </div>
    {/* blog style */}
      <div className="mt-12">
      <p className="font-[500] capitalize">Blog Style</p>
        <div className="mt-2 max-h-[500px] overflow-y-auto">
        {postTypes.map((item) => (
          <FilterItem
            key={item.id}
            param="blogStyle"
            title={item.name}
            value={item.slug}
            isChecked={blogStyle ? blogStyle.includes(item.slug) : false}
          />
        ))}
        </div>
      </div>
        
    
      </div>
    </div>
  );
};

export default Filter;
