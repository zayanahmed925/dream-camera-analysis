import React from 'react';
import Header from '../Header/Header';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className='container my-4'>
                <div className="question-1 p-2 ">
                    <h3 className='mt-5'>What is the Context API,what is the purpose to use context api?</h3>
                    <p>The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.. <br />The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc</p>
                </div>
                <div className="question-2 my-4 p-2">
                    <h3>What is semantic Tag?</h3>
                    <p>A semantic element clearly describes its meaning to both the browser and the developer .its have meaningful names which tells about type of content.Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.</p>
                    <ul> Some of Example:
                        <li>Header</li>
                        <li>nav</li>
                        <li>article</li>
                        <li>section</li>
                        <li>aside</li>
                        <li>footer</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Blogs;