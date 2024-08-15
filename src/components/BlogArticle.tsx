import React from "react";
import ArrowLink from "@/icons/ArrowLink";

interface BlogArticleProps {
    urlImage: string;
    text: string;
    day: string | null;
    urlNotice: string | null;
    title: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
    urlImage,
    text,
    day,
    urlNotice,
    title,
}) => {
    return (
        <article className="flex flex-col items-center justify-between bg-slate-950  gap-4 rounded-lg  max-w-[800px]">
            <div >
                <img src={urlImage} alt="blog image" className="max-h-[600px] max-w-full" />
            </div>
            <h3 className="font-bold">{title}</h3>
            <p className="max-w-[700px]">{text}</p>
            <div className="flex flex-row flex-wrap items-center justify-between w-full p-2   max-w-[700px]">
                <p>
                    <span className="text-red-400">{day ?? ""}</span>
                </p>
                <div className="min-w-2">
                    {urlNotice ? (
                        <a href={urlNotice} target="_blank">
                            <ArrowLink />
                        </a>
                    ) : null}
                </div>
            </div>

        </article>
    );
};

export default BlogArticle;
