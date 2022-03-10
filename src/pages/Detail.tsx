import React from "react";
import { TopicProps } from "../model/topic";





export default function Detail(props: TopicProps) {

    return(
        <>
        <h1>TopicDetail</h1>
        <div>
            <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>나이</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.age}</td>
                    <td>{props.title}</td>
                    <td>{props.description}</td>
                    <td>{props.createAt}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}