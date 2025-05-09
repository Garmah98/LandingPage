import Shadow from './UI/Shadow'
import Article from './components/Article'
import Page from './components/Page'

function App() {
    return (
        <main className="m-auto flex flex-col h-full w-full">
            <Page className="md:left-1/2 md:overflow-hidden md:rounded-r-lg bg-[url(/dogLong.jpg)] bg-cover bg-center">
                <Shadow />
                <div className="absolute top-5 w-full text-center text-white">
                    <h1 className="mt-7 text-7xl">Dog</h1>
                </div>
            </Page>
            <Page className="relative md:right-1/2 md:rounded-l-lg bg-[#7DC968]">
                <div className="relative m-auto mt-10 h-1/3 w-[90%] overflow-hidden rounded-lg ring-3 ring-white">
                    <Shadow />
                    <img
                        className="h-full w-full object-cover"
                        src="/dog.jpg"
                        alt="Picture of dog"
                    />
                </div>
                <Article title="Not a cat">
                    <p className="ml-3 md:ml-5 text-xl md:text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae magnam qui tenetur minima neque sequi officiis
                        voluptatum quis mollitia nisi dolor, itaque, ullam
                        quisquam animi? Lorem ipsum dolor sit amet.
                    </p>
                </Article>
                <div className="absolute bottom-1/12 w-full text-center">
                    <a
                        className="inline-block rounded-md border-2 border-[#133099] bg-[#1D49E2] p-2 text-3xl font-bold text-white shadow-md shadow-black hover:scale-95"
                        href="https://en.wikipedia.org/wiki/Dog"
                    >
                        Learn more
                    </a>
                </div>
                <footer className="absolute bottom-2 left-3">
                    <span className="text-neutral-600">
                        &copy; Piotr Gawek {new Date().getFullYear()}
                    </span>
                </footer>
            </Page>
        </main>
    )
}

export default App
