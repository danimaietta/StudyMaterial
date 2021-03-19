import React, { useState, useEffect } from 'react'

export default function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if (isOnline === null) {
    return 'Loading Friend...'
  }
  return isOnline ? 'Online' : 'Offline'
}

const ChatAPI = {
  subscribeToFriendStatus(id, handleStatusChange) {
    const isOnline = BD.findUser(id)
    handleStatusChange({ isOnline })
  },
  unsubscribeFromFriendStatus(id, handleStatusChange) {
    handleStatusChange({ isOnline: false })
  }
}

const BD = {
  findUser(id) {
    return id == 1 ? true : false
  }
}
