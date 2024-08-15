import BlogArticle from "@/components/BlogArticle";
function HomePage() {
    return (
        <section className="flex flex-col justify-center items-center p-4 gap-10 flex-wrap">
            <BlogArticle
                urlImage="https://pbs.twimg.com/media/GTV7Q8WX0AERYgZ?format=jpg&name=large"
                text="The Valorant Champions 2024 is just around the corner, meaning a new bundle for the annual competition is dropping soon into the game."
                day={"8 ago 2024"}
                urlNotice={
                    "https://siege.gg/news/valorant-champions-2024-bundle"
                }
                title="Valorant Champions 2024 bundle"
            ></BlogArticle>

            <BlogArticle
                urlImage="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/955b3506b64de2092325e078a90d30ed6bbd62c7-1920x1080.jpg?auto=format&fit=max&w=1920"
                text="Catch live matches during Champions Seoul to earn exclusive Drops! Drops for Champions Seoul include a spray and card representing the host region. The spray is a nod to VALORANT’s tactanimals, while the card is a nod to traditional Korean attire."
                day={" Tune in for a live match between Aug 1 - 24"}
                urlNotice={
                    "https://valorantesports.com/en-US/news/watch-and-earn-champions-seoul"
                }
                title="Catch the live matches for exclusive Drops!"
            ></BlogArticle>


        </section>
    );
}

export default HomePage;


