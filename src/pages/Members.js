import React from 'react';
import styled from 'styled-components';

import data from "../data.json";
import { useSelector } from 'react-redux';
import { LogInUser } from '../features/loginSlice';


const MembersBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `;

const MembersCard = styled.div`
  width: 300px;
  background-color: #efefef;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 20px;
  
  .relation {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 10px;
    }
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
  
  .birth, .name { 
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0;
  }
  `;



function Members(props) {
  const logInUser = useSelector(LogInUser);

  const NewData = [...data];

  const oldAgeArray = NewData.sort((a, b) => { if (a.birth < b.birth) return -1; })

  const loginUserRelation = logInUser.members;
  
  return (
    <MembersBox>
      {
        oldAgeArray.map((user) => 
        // 로그인 유저가 가지고 있는 
        // members.memberId와 user.id의 값이 일치하면 members.relation을 출력
        // console.log(user)



        <MembersCard key={user.id}>
            <div className='relation'>
              <img src={user.imagePath}></img>
              {/* <p>{logInUser.members[1].relation}</p> */}
            </div>
            <p className='name'>이름: {user.name}</p>
            <p className='birth'>생년월일: {user.birth}</p>
          </MembersCard>
        )
      }
    </MembersBox>
  );
}

export default Members;