import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom:3rem;
    width:768px;
    margin:0 auto;
    margin-top:2rem;
    @media screen and (max-width:768px){
        width:100%;
        padding-left:1rem;
        padding-right:1rem;
    }
`;


const NewList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    //컴포넌트 didmount와 동일한 역활을 하는 hooks
    useEffect( ()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try {
                //전달받은 카테고리값이 있으면 해당값을 넣고 없으면 default all이니까 안넣도록 세팅
                const query = category === 'all' ? '' : `&category=${category}`;
                const res = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=274ce622f54e4f0a9cf1572285c896a7`);
                setArticles(res.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
        //카테고리값이 변경될때마다 새로 render
    },[category]);
    
    //대기중일때 true값
    if(loading){
        return <NewsListBlock>대기중...</NewsListBlock>;
    }
    //articles값이 설정되지 않았을때 설정안해주면 처음 render됬을때 정보가 없어서 오류를 일으킴
    if(!articles){
        return null;
    }
    //articles 값이 유효할때
    return (
        <NewsListBlock>
            {articles.map(article =>(
                <NewsItem key={article.url} article={article}></NewsItem>
            ))}
        </NewsListBlock>
    );
};

export default NewList;