# Blog Storage

Blog posts are stored in `content/blog/posts.json`.

Each post record uses this shape:

```json
{
	"title": "Post title",
	"slug": "post-slug",
	"excerpt": "Short summary",
	"content": "Post body",
	"publishedAt": "2026-04-05T00:00:00.000Z",
	"readTimeMinutes": 2,
	"tags": ["replyfan"],
	"angle": "Benefit angle",
	"copyRefinedAt": "2026-04-05T16:30:00.000Z"
}
```

Notes:

- `copyRefinedAt` is optional.
- `copyRefinedAt` is internal only and should not be displayed in the UI.
- New generated posts can omit `copyRefinedAt` until somebody manually refines the copy.
- Existing posts can be backfilled with one shared timestamp when refinement tracking is introduced.
