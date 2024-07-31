import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Styled from './styled'
import { ROUTE_STACK } from '../../../Helpers/constants'


const backgroundImage = require("../../../../assets/images/bg/2.jpg") 
const backgroundImageDark = require("../../../../assets/images/bg/1.jpg") 

interface IPropsLoading {
  navigation: any
}

const LoadingScreen = (props:IPropsLoading) => {

  const { navigation } = props

  useEffect(() => {
    setTimeout(() => {
      //navigation.navigate(ROUTE_STACK.RootDev.plantilla)
    }, 5000);
  }, [])
  

  return (
    <Styled.Container>
      <Styled.BackgroundImage  source={backgroundImage} />
      <Styled.CenteredText>Loading Screen</Styled.CenteredText>
    </Styled.Container>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})