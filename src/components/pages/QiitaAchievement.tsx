import { Text, Spinner, Badge } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { QiitaItemResponse } from "../../types/QiitaItem";
import axios from "axios";

export const QiitaAchievement = () => {
  const [responseData, setResponseData] = useState([]);
  const [viewsCount, setViewsCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [calculateFetchFlag, setCalculateFetchFlag] = useState(false);


  console.log('rendering')

  useEffect(() => {
    //axios.get(APIのエンドポイント,パラメータの引数)
    axios.get(`https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=100`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_TOKEN}`,
      },
    })
      // response にAPIからのレスポンスが格納される
      .then((response) => {
        setResponseData(response.data)
        console.log(response, "response");
        response.data.map((item: QiitaItemResponse) => {
          setViewsCount(prev => prev + item.page_views_count)
          setLikesCount(prev => prev + item.likes_count)
          setCalculateFetchFlag(true)
        })
      })
      .catch((error) => {
        console.debug(error);
      });
  }, [])
  return (

    <>
      <Text fontSize="2xl" fontWeight="bold" mt={6}>Qiita Achievement </Text>
      {calculateFetchFlag ? (
        <>
          <Text mt={10}>
            <Badge fontSize="lg" colorScheme='green' >記事投稿数:{responseData.length}</Badge>
          </Text>
          <Text mt={4}>
            <Badge fontSize="lg" colorScheme='green' >views合計:{viewsCount}</Badge>
          </Text>
          <Text mt={4}>
            <Badge fontSize="lg" colorScheme='green' >いいね数合計:{likesCount}</Badge>
          </Text>
          <Text mt={4}>
            <Badge fontSize="lg" colorScheme='green' >平均いいね数:{likesCount / responseData.length}</Badge>
          </Text>
        </>
      ) : (<Spinner mt={10} size='xl' />)
      }
    </>
  )
}
