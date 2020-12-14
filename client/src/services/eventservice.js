import axios from 'axios'

export default {
    async getPosts() {
        let res = await axios.get("http://localhost:3000");
        return res.data;
    },
    async getPostSingle(postId) {
        let res = await axios.get("http://localhost:3000/story/" + postId);
        return res.data;
    },
    async postComment(postId, comment){
        await axios.post("http://localhost:3000/story/" + postId, comment);
    },

    async postStory(comment){
        await axios.post("http://localhost:3000/new", comment);
    },
}