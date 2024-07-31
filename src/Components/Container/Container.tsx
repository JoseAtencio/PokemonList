import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Styled from './styled'

interface ContainerProps {
    children: React.ReactNode;
}

const Container = (Props:ContainerProps) => {
  const {children} = Props;
  return (
    <Styled.Container>
      <StatusBar style="auto" /> 
      {children}
    </Styled.Container>
  )
}

export default Container

const styles = StyleSheet.create({})