import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import metadataParser from 'markdown-yaml-metadata-parser'
import { Link } from 'react-router-dom';

const Projects = () => {
    const MarkdownContext = require.context('../Markdown', false, /\.md$/);
    const file_paths = MarkdownContext.keys().reverse()
    const [test, setTest] = useState([])
    useEffect(async () => {
        setTest([])
        await file_paths.map(filepath => {
            // console.log(filepath.slice(2,))
            import(`../Markdown/${filepath.slice(2,)}`)
                .then(res => {
                    fetch(res.default).then(res => res.text()).then(res => metadataParser(res)).then(res => setTest(test => [...test, res]))
                }).catch(err => console.log(err))
        })

    }, []);
    // console.log(test)
    return (
        <div >
            <h2>Projects</h2>
            <div>
                {
                    test.map((post, key) => (<div className="card" id="carding" key={key}>
                        <div><Link to={`/Post/${post.metadata.id}`} className="post-title"><h3 className="card-header">{post.metadata.title}</h3></Link></div>
                        <div className="card-body">
                            <p className="card-text"><ReactMarkdown children={post.content.split('<!---more--->')[0]} /></p>
                            <Link to={`/Post/${post.metadata.id}`} className="post-ext">Read More</Link>
                        </div>
                    </div>))
                }
            </div>

        </div >
    )
}

export default Projects
