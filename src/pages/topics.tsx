import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAutomaticTypeDirectiveNames } from "typescript";
import TopicList, { TopicProps } from "./TopicList";

const serverApi = "http://localhost:8080/";

export default function Topics() {

   const [topics, setTopics] = useState<TopicProps[]>([]);
   
    useEffect( () => {
        getTopics();
    },[])

    const getTopics = (): void => {
        axios.get(`${serverApi}topic`).then((req) => {
            setTopics(req.data);
        });
    }

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
                       />
                   )
               })
           }
       </div>
    );
}