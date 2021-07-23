import React from 'react'
import HomePosts from './HomePosts'

// import All from '../../src/Markdown/hello.md'


// import README.md from "./"
const Home = () => {
    // axios.get(raw)
    //     .then(res => console.log(res))
    // console.log(All)
    // for (let x in All) {
    //     console.log(x)
    // }
    // const files = fs.readdirSync("../Markdown");
    // for (const file of files) {
    //     console.log(file);
    // }
    return (
        <div>
            <h1>Home</h1>
            <HomePosts />
        </div>
    )
}

export default Home
