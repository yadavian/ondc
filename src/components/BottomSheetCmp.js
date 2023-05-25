import { StyleSheet } from 'react-native'
import React from 'react'
import { BottomSheet } from '@rneui/themed';

const BottomSheetCmp = (props) => {

    const { isVisible, setIsVisible } = props

    const handle_onBackdropPress = () => {
        setIsVisible(false)
    }

    return (
        <BottomSheet
            modalProps={{}}
            isVisible={isVisible}
            onBackdropPress={handle_onBackdropPress}>
            {props.children}
        </BottomSheet>
    )
}

export default BottomSheetCmp

const styles = StyleSheet.create({})