import React from "react";
import { Link } from "react-router-dom";

export interface TopicProps {
    id: number,
    title: string,
    description: string,
    age: number,
}

export default function TopicList(props: TopicProps) {
    return(
        <div>
            <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>나이</th>
                    <th>제목</th>
                    <th>내용</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.age}</td>
                    <td>{props.title}</td>
                    <td>{props.description}</td>
                </tr>
            </tbody>
        </table>
            <Link to="/Add">
                <button>Add</button>
            </Link>
        </div>
        
    )
}