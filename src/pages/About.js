import metadataParser from 'markdown-yaml-metadata-parser'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const About = () => {
    const [result, setAbout] = useState('')
    useEffect(() => {
        import('../Markdown/About/about.md').then(res => {
            // console.log(res.default)
            fetch(`https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/${res.default.split('/').slice(-1)[0]}`).then(res =>
                res.text()
            ).then(res => metadataParser(res)).then(res => setAbout(res)).catch(error => console.log(error))
        })
    }, [])
    // console.log(result)

    return (
        <div>
            <h2>About</h2>
            <div className="container">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={result.content} />
            </div>
        </div>
    )
}

export default About
