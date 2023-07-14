import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'



const initialState = {
  postList: [
    {
      name: "봉미선",
      id: 1,
      profileImage: "https://i.ibb.co/7S4brCn/Kakao-Talk-20230714-173312326-04.jpg",
      imagePath: "https://i.ibb.co/LNNGFfw/Kakao-Talk-20230629-182526404.jpg",
      content: "우리 가족 첫 바다여행!!",
    },
    {
      name: "신형만",
      id: 2,
      profileImage: "https://i.ibb.co/6wWV413/Kakao-Talk-20230714-173312326-03.jpg",
      imagePath: "https://i.ibb.co/BVFcm86/famsta2.jpg",
      content: "차에서 두근두근",
    },
    {
      name: "신짱구",
      id: 3,
      profileImage: "https://i.ibb.co/PTKVHJp/Kakao-Talk-20230714-173312326.jpg",
      imagePath: "https://i.ibb.co/GcfGvL7/famsta3.jpg",
      content: "평화로운 우리의 여름",
    },
    {
      name: "봉미선",
      id: 4,
      profileImage: "https://i.ibb.co/7S4brCn/Kakao-Talk-20230714-173312326-04.jpg",
      imagePath: "https://i.ibb.co/rk1jbCH/Kakao-Talk-20230629-182517255.jpg",
      content: "오랜만에 외식~~",
    },
    {
      name: "봉미선",
      id: 5,
      profileImage: "https://i.ibb.co/7S4brCn/Kakao-Talk-20230714-173312326-04.jpg",
      imagePath: "https://i.ibb.co/nzMzDkf/famsta5.jpg",
      content: "살인 진드기 조심!!!",
    },
    {
      name: "신짱아",
      id: 6,
      profileImage: "https://i.ibb.co/d2BQXZk/Kakao-Talk-20230714-173312326-02.jpg",
      imagePath: "https://i.ibb.co/f4Bf8V8/famsta6.jpg",
      content: "삼겹살 홈파티!!",
    }
  ],
}

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    getPostList: (state, { payload: post }) => {
      state.postList = post;
    },
    addPostList: (state, { payload: { logInUSerInfo, content, image } }) => {
      state.postList.unshift({
        name: logInUSerInfo.name,
        id: uuidv4(),
        memberId: logInUSerInfo.id,
        content: content,
        imagePath: image,
        profileImage: logInUSerInfo.imagePath,
      });
    },
    deletePost(state, action) {
      const id = action.payload;
      state.postList = state.postList.filter(post => post.id !== id);
      state.selectedTitle = null;
    },
    editPost: (state, action) => {
      const { id, content } = action.payload;
      const post = state.postList.find(post => post.id === id);
      if (post) {
        post.content = content;
      }
    },
  }
});

export const { getPostList, addPostList, deletePost, editPost, addComment } = photoSlice.actions;

export const postLists = (state) => state.photo.postList; 
export const comments = (state) => state.photo.comment;

export default photoSlice.reducer;