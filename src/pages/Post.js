import metadataParser from 'markdown-yaml-metadata-parser'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'


const Post = (props) => {
    const [post, setPost] = useState()
    // console.log(props.match.params.id)
    const post_id = props.match.params.id
    useEffect(() => {
        import(`../Markdown/${post_id}.md`)
            .then(res => {
                fetch(`https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/${res.default.split('/').slice(-1)[0]}`).then(res => res.text()).then(res => metadataParser(res)).then(res => setPost(res))
            })
    }, [post_id])
    // console.log(post)

    return (
        <div className="post-card">{post ? <>
            <h2 className="card-header">{post.metadata.title}</h2>
            <div className="card-body">
                <p className="card-text"><ReactMarkdown children={post.content.replace('<!---more--->', '')} /></p>
            </div>
        </> : <>loading...</>}
        </div>
    )
}

export default Post
