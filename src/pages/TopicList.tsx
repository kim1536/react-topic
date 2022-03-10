import axios from "axios";
import React from "react";
import { TopicProps } from "../model/topic";
import { serverApi } from "../server/server";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




export default function TopicList(props: TopicProps) {
   // let navigate = useNavigate();

    const deleteTopic = (e: any): void => {
        axios.delete(`${serverApi}/topic/${props.id}`);
        window.location.href = "http://localhost:3001/";
    }

    // let handleClick = (e: any) => {
    //    navigate("/topic/:id", {topic: });
    // }
    
    return(
        <>
        <div>
            <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>나이</th>
                    <th>제목</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.age}</td>
                    <Link to={`/TopicDetail/${props.id}`}>
                    <td>{props.title}</td>
                    </Link>
                    <td>{props.createAt}</td>
                    <td><button onClick={(e) => deleteTopic(props.id)}> 삭제</button></td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}