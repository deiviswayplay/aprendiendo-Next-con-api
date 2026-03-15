"use client";

import { useRouter } from "next/navigation";

export default function TagContainer({ tags }) {
  const router = useRouter();

  const handlePush = (id) => {
    router.push(`?tags=${id}&page=1`);
  };
  return (
    <div className="flex gap-5">
      {tags.map((tag) => (
        <p
          onClick={() => handlePush(tag.id)}
          className="bg-gray-500 p-2 cursor-pointer"
          key={tag.id}
        >
          {tag.name}
        </p>
      ))}
    </div>
  );
}
