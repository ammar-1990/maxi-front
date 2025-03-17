import FilterItem from "@/components/FilterItem";
import prisma from "@/lib/prisma";
import React from "react";

type Props = { category: string | undefined,topic:string[] | undefined };

const Filter = async ({ category,topic }: Props) => {
  const subCateogry = await prisma.subCategory.findMany({
    ...(category && {
      where: {
        category: {
          slug: category,
        },
      },
    }),
  });

  return (
    <div className="p-2 border">
      <p className="text-md font-[500] capitalize">Filter</p>
      <div className="mt-8">
    <div>
        <p className="font-[500] capitalize">Topic</p>
        <div className="mt-3 max-h-[500px] overflow-y-auto">
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
      
        
    
      </div>
    </div>
  );
};

export default Filter;
