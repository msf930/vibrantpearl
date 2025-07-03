export async function isUniqueSlug(slug, context) {
    const {document, getClient} = context
    const client = getClient({apiVersion: '2022-12-07'})
    const id = document._id.replace(/^drafts\./, '')
    const params = {
        draft: `drafts.${id}`,
        published: id,
        slug,
    }
    const query = `!defined(*[!(_id in [$draft, $published]) && url.current == $slug][0]._id)`
    const result = await client.fetch(query, params)
    return result
}