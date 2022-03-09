import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAutomaticTypeDirectiveNames } from "typescript";
import { TopicProps } from "../model/topic";
import { serverApi } from "../server/server";
import TopicList from "./TopicList";

export default function Topics() {

   const [topics, setTopics] = useState<TopicProps[]>([]);
   
    // useEffect( () => {
    //     getTopics();
    // },[])

    // const getTopics = (): void => {
    //     axios.get(`${serverApi}topic`).then((req) => {
    //         setTopics(req.data);
    //     });
    // }


    return(
       <div>
           {
               topics.map(t => {
                   return (
                       <TopicList
                       key={t.id}
                       id={t.id}
                       title={t.title}
                       description={t.description}
                       age={t.age}
                       createAt={t.createAt}
                       />
                   )
               })
           }
       </div>
    );
}