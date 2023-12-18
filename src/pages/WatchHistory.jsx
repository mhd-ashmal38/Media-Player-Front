import React, { useEffect, useState } from 'react'
import { getHistory } from '../service/allapi'

function WatchHistory() {

  const [History, setHistory] = useState([])

  useEffect(() => {
    getWatchHistory()

  }, [])



  const getWatchHistory = async () => {
    const { data } = await getHistory()
    setHistory(data)
  }
  console.log(History);

  return (
    <>

      <h1 className='mt-4'>Watch History</h1>

      <table className='table-shadow m-3 border-rounded'>

        <thead>
          <tr>
            <th>ID</th>
            <th>CARD NAME</th>
            <th>URL</th>
            <th>DATE</th>
          </tr>
        </thead>

        <tbody>

          {
            History?.map((item, index) => (
              <tr>
                <td>{index+1}</td>
                <td>{item?.cardname}</td>
                <td>{item?.url}</td>
                <td>{item?.Date}</td>
              </tr>
            ))
          }


        </tbody>

      </table>

    </>
  )
}

export default WatchHistory