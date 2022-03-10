import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverApi } from "../server/server";


/**
     * 1. 서버에 토픽 등록을 요청한다.
     * 1.1. 요청 성공 콜백이 왔다면 토픽 목록 페이지로 이동한다.
     */

export default function Add() {
    
    const [topic, setTopics] = useState({
        title:"",
        age:0,
        description:"",
    });
   

    const handleSubmit = (e:any) => {
        e.preventDefault();
        axios.post(`${serverApi}/topic`,topic).then((req) => {
            setTopics(req.data);
        });
        setTopics({
            title:"",
            age:0,
            description:"",
        })
        window.location.href = "http://localhost:3001/";
    }

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>글쓰기</h1>
                <label>
                제목: 
                <input type="text" name="title" value={topic.title} onChange={ (e) => setTopics({...topic, title: e.target.value})} placeholder="title"/>
                </label>
                <br />
                <label>
                나이: 
                <input type="number" name="age" value={topic.age} onChange={(e) => setTopics({...topic, age: e.target.valueAsNumber})} placeholder="age"/>
                </label>
                <br />
                <label>
                코맨트:
                <textarea name="description" value={topic.description} onChange={(e) => setTopics({...topic, description: e.target.value})} placeholder="description"></textarea>
                </label>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}
