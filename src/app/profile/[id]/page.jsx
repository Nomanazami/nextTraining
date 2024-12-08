  "use client"  //convert client side into server side

import { useParams } from 'next/navigation'

function ProfileDetail() {
    const params = useParams();  //console me show 
    console.log("params",params)
  return (
    <div>
      <h1>
       ProfileDetails:{params.id}
      </h1>
        
    </div>
  )
}

export default ProfileDetail
