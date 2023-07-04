import React, { useEffect, useState } from 'react';
import dataPhoto from "../../dataPhoto.json";
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
import CommentList from './CommentList';
import { useFetcher, useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import { getPhotoList } from '../../utils/local-storage.util';

const PhotoListWrapper = styled.div`
  .writePhotoButton {
    position: fixed;
    bottom: 40px;
    left: 583px
  }
  .writePhotoButton{
      background: none;
      outline: none;
      border: none;
      height: 100%;
      /* line-height: 100%; */
      display: flex;
      align-items: end;
      svg {
        font-size: 40px;
        opacity: .8;
        color: rgb(245, 204, 141);;
        &:hover {
          color: red;
        }
      }
    }
`

function PhotoList(props) {

  const navigate = useNavigate('/')

  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    const res = getPhotoList()
    console.log('res: ', res);
    setPhotoList(res)
  }, [])

  return (
    <PhotoListWrapper>
      {photoList.map((post) => 
        <PhotoListItem key={post.id} post={post} />
      )}
      <button className='writePhotoButton' onClick={() => navigate('/writePhoto')}><BsPlusCircleFill/></button>
    </PhotoListWrapper>
  );
}

export default PhotoList;