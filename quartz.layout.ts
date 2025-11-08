import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.RecentNotes({
    limit: 3,
    filter: (f:QuartzPluginData) => f.filePath != "content/index.md"
  })],
  footer: Component.Footer({
    links: {
      "Source code": "https://github.com/chartaseus/chartaseus.github.io",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    Component.Backlinks(),
    Component.Explorer({
      title: "All Notes",
      folderDefaultState: "open",
      filterFn: (node) => {
          const omit = new Set(["index", "heading 1"])

          // can also use node.slug or by anything on node.data
          // note that node.data is only present for files that exist on disk
          // (e.g. implicit folder nodes that have no associated index.md)
          return !omit.has(node.displayName.toLowerCase())
        },
    }),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
