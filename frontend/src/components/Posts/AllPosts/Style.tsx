import styled from 'styled-components';

export const ContainerPosts = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  h2 {
    width: 40%;
    color: #000;
  }
`;

export const BannerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-bottom: 5px solid #000;
  border-top: 5px solid #000;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  h1 {
    font-size: 2.5rem;
    color: #000;
    padding: 5px 0;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: #000;
    padding: 5px 0;
    text-align: center;
  }
`;

export const BannerImage = styled.div`
  width: 50%;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 30%;
  gap: 10px;

  input {
    width: 70%;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #000;
  }

  button {
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
  }
`;

export const Post = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-bottom: 5px solid #000;
  border-top: 5px solid #000;
`;

export const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #999;
    
    h3 {
        font-size: 1.8rem;
        color: #000;
        padding: 5px 0;
    }

    div {
        display: flex;
        justify-content: start;
        gap: 1rem;
    }

    span {
        font-size: 0.8rem;
    }
    
    p {
        font-size: 0.9rem;
        padding: 20px 0;
        color: #222;
        line-height: 1.9;
        letter-spacing: 0.9px;
        text-align: justify;
    }

    .category-item {
      display: inline-block;
      padding: 5px 10px;
      margin: 5px 10px 0 0;
      border-radius: 50px;
      border: 1px solid #ccc;
      background-color: #f5f5f5;
    }
`;