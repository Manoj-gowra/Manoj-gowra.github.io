
import metadataParser from 'markdown-yaml-metadata-parser'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Contact = () => {
    const [result, setAbout] = useState('')
    useEffect(() => {
        import('../Markdown/contact/contact.md').then(res => {
            // console.log(res.default)
            fetch(`https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/${res.default.split('/').slice(-1)[0]}`).then(res =>
                res.text()
            ).then(res => metadataParser(res)).then(res => setAbout(res)).catch(error => console.log(error))
        })
    }, [])
    // console.log(result)

    return (
        <div>
            <h2>Contact me</h2>
            <div className="container">
                <Markdown rehypePlugins={[rehypeRaw]} children={result.content} escapeHtml={false} />
            </div>
        </div>
    )
}

export default Contact

