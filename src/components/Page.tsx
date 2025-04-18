import { type ReactNode } from 'react'
type PageProps = {
    children: ReactNode
    className: string
}

export default function Page({ children, className }: PageProps) {
    let styles =
        ' absolute top-1/2 h-[90%] w-[45%] -translate-y-1/2 shadow-lg shadow-black ring-3 ring-white animate-fadeIn'
    styles = className + styles

    return <section className={styles}>{children}</section>
}
