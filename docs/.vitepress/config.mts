import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Enigen OCM development",
    description: "quick start with OCM development",
    base: "/ocm-doc/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/" },
            { text: "Links", link: "/links/" },
        ],
        search: {
            provider: "local",
        },

        sidebar: [
            {
                text: "How to",
                items: [
                    { text: "What is OCM", link: "/guide/info" },
                    { text: "Getting Started", link: "/guide/start" },
                    { text: "Project dir", link: "/guide/dir" },
                    { text: "Custom Component", link: "/guide/components/" },
                    { text: "Custom Template/Theme", link: "/guide/template/" },
                ],
            },
        ],
    },
})
