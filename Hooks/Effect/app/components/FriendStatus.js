import React, { useState, useEffect } from 'react'

export default function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }
    ChatAPI.subscribe(props.friend.id, handleStatusChange)

    return function cleanup() {
      ChatAPI.unsubscribe(props.friend.id, handleStatusChange)
    }
  })

  if (isOnline === null) {
    return 'Loading Friend...'
  }
  return isOnline ? `Online ${props.friend.id}` : `Offline ${props.friend.id}`
}

const ChatAPI = {
  findUser(id) {
    // Think this is an api method
    return id == 1 ? true : false
  },
  subscribe(id, handleStatusChange) {
    const isOnline = this.findUser(id)
    handleStatusChange({ isOnline })
  },
  unsubscribe(id, handleStatusChange) {
    handleStatusChange({ isOnline: false })
  }
}
