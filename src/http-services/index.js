import { instance } from './instance';
import { instancePosts } from './instancePosts';

export const Services = {
    getAllCountries: () => instance.get('/all'),
    getAllPosts: () => instancePosts.get('/posts'),

    addPosts: () => 
        instancePosts.post('/posts',{
        content : 'test by Chedli from react form' 
    })
};