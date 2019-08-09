import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtButton } from 'taro-ui'
import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/components/loading.scss'

export default class Index extends Component {
  render () {
    return (
      <View>
        <AtButton type='primary'>按钮文案</AtButton>
      </View>
    )
  }
}
