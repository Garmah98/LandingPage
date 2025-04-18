import { type ReactNode } from 'react'

type ArticleProps = {
    title: string
    children: ReactNode
}
export default function Article({ title, children }: ArticleProps) {
    return (
        <article>
            <h2 className="m-5 text-6xl">{title}</h2>
            {children}
        </article>
    )
}
