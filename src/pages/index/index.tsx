import {ITouchEvent, Text, View} from '@tarojs/components'
import {useState} from "react";
import './index.scss'

export default function Index() {
  const [distance, setDistance] = useState(0)

  function onTouchMove(event: ITouchEvent) {
    const {clientY} = event.touches[0]
    setDistance(clientY)
  }

  return (
    <View className='index' onTouchMove={onTouchMove} style={{
      transform: distance >= 0 ? `translate3d(0,${distance}px, 0)` : "",
    }}
    >
      <Text>Hello world!</Text>
    </View>
  )
}
