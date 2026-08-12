export const dynamic = "force-static";

export default function sitemap() {
    return [
        {
            url: "https://canrollas.github.io",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://canrollas.github.io/haberacik",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://canrollas.github.io/haberacik/privacy",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
