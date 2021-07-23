
import metadataParser from 'markdown-yaml-metadata-parser'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Contact = () => {
    const [result, setAbout] = useState('')
    useEffect(() => {
        import('../Markdown/contact/contact.md').then(res => {
            // console.log(res.default)
            fetch(res.default).then(res =>
                res.text()
            ).then(res => metadataParser(res)).then(res => setAbout(res)).catch(error => console.log(error))
        })
    }, [])
    // console.log(result)

    return (
        <div>
            <h2>Contact</h2>
            <div className="container">
                <ReactMarkdown children={result.content} />
            </div>
        </div>
    )
}

export default Contact

