import { type ReactNode } from 'react'
type PageProps = {
    children: ReactNode
    className: string
}

export default function Page({ children, className }: PageProps) {
    let styles =
        ' md:absolute md:top-1/2 w-full h-screen md:h-[90%] md:w-[45%] md:-translate-y-1/2 shadow-lg shadow-black ring-3 ring-white animate-fadeIn'
    styles = className + styles

    return <section className={styles}>{children}</section>
}
