import React from 'react'
import TopStoriesSkeleton from './top-stories-skeleton'

const TopStoriesSkellyWrapper = () => {
  return (
     <ol className="flex flex-col">
          <TopStoriesSkeleton number={1}/>
          <TopStoriesSkeleton number={2}/>
          <TopStoriesSkeleton number={3}/>
          <TopStoriesSkeleton number={4}/>
          <TopStoriesSkeleton number={5}/>
     </ol>
  )
}

export default TopStoriesSkellyWrapper