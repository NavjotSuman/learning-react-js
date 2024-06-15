import React, { useState } from 'react';
import AppwriteService from '../appwrite/configService'
import { Container, PostCard } from '../components';

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    AppwriteService.getPosts([]).then((post) => {
        if (post) {
            setPosts(post.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container >
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
