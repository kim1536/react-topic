
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TopicProps } from "../model/topic";
import { serverApi } from "../server/server";
import Detail from "./Detail";




export default function TopicDetail() {
    const { state } = useLocation();

   const [topics, setTopics] = useState<TopicProps[]>([]);
   
    useEffect( () => {
        
        // getTopic();
    },[])

    const getTopic = (): void => {
        axios.get(`${serverApi}/topic/:id`).then((req) => {
            setTopics(req.data);
        });
    }

    return(
       <div>
           {
               topics.map(t => {
                   return (
                       <Detail
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