import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TopicProps } from "../model/topic";
import { serverApi } from "../server/server";
import TopicList from "./TopicList";

export default function Topics() {

   const [topics, setTopics] = useState<TopicProps[]>([]);
   
    useEffect( () => {
        getTopics();
    },[])

    const getTopics = (): void => {
        axios.get(`${serverApi}/topic`).then((req) => {
            setTopics(req.data);
        });
    }

    return(
       <div>
             <h1>TopicList</h1>
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
           <Link to="/Add">
            <button>글쓰기</button>
         </Link>
       </div>
    );
}