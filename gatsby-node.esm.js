import path from 'path'
import write from 'write'
import { introspectionQuery, graphql, printSchema } from 'gatsby/graphql'

/**
 * Generate GraphQL schema.json file to be read by eslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 * (via:https://github.com/damassi/gatsby-starter-typescript-rebass-netlifycms/blob/master/gatsby-node.js)
 */
export const onPostBootstrap = async ({ store }) => {
  try {
    const { schema } = store.getState()
    const jsonSchema = await graphql(schema, introspectionQuery)
    const sdlSchema = printSchema(schema)

    write.sync('schema.json', JSON.stringify(jsonSchema.data), {})
    write.sync('schema.graphql', sdlSchema, {})

    console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n') // eslint-disable-line
  } catch (error) {
    console.error(
      '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
      error,
      '\n'
    )
  }
}
export const onCreateWebpackConfig = async ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
