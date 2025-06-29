import { getMultipleAuthors, getAuthorData, type Author } from '~/utils/authors'

interface Blog {
    title?: string
    author?: string
    authors?: string[]
}

/**
 * Supports both single author (author: "key") and multiple authors (authors: ["key1", "key2"])
 * This allows for semantic frontmatter: use 'author' for single author, 'authors' for multiple
 */
export const useBlogAuthors = (blog: Blog) => {
    const getAuthors = (): Author[] => {
        if (blog.authors && Array.isArray(blog.authors) && blog.authors.length > 0) {
            return getMultipleAuthors(blog.authors)
        }
        
        if (blog.author && typeof blog.author === 'string') {
            const authorData = getAuthorData(blog.author)
            return authorData ? [authorData] : []
        }

        return []
    }

    const getPrimaryAuthorName = (): string => {
        const authors = getAuthors()
        return authors.length > 0 ? authors[0].name : ''
    }

    return {
        getAuthors,
        getPrimaryAuthorName
    }
}