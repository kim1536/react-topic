import React from "react";
import { Link } from "react-router-dom";
import { TopicProps } from "../model/topic";



export default function TopicList(props: TopicProps) {
    return(
        <>
        <h1>TopicList</h1>
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
                    <Link to="/Detail">
                    <td>{props.title}</td>
                    </Link>
                    <td>{props.createAt}</td>
                </tr>
            </tbody>
        </table>
            <Link to="/Add">
                <button>글쓰기</button>
            </Link>
        </div>
        </>
    )
}