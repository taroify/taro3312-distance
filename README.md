## 通过 onTouchMove 事件设置 transform 时会存在卡顿问题

```tsx
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
```
```scss
.index {
  background: red;
  height: 50px * 2;
}
```
在**安卓真机**测试时，向下滑动时会存在卡顿问题。

### 卡帧演示

![a](https://raw.githubusercontent.com/taroify/taro3312-distance/main/images/a.gif)

### 非卡帧演示

![b](https://raw.githubusercontent.com/taroify/taro3312-distance/main/images/b.gif)

当触屏向下滑动时会卡顿，但是当先向上在向下滑动时就不卡顿了。
