import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomSheetCmp from './BottomSheetCmp';
import { CheckBox } from '@rneui/themed';


const SortComponent = (props) => {
    const { title } = props
    const [isVisible, setIsVisible] = useState(false);

    const handle_sortOnPress = () => {
        // alert("ll")
        setIsVisible(true)
    }

    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];


    const [selectedIndex, setIndex] = React.useState(0);

    return (
        <>
            <TouchableOpacity
                onPress={handle_sortOnPress}
                className="flex-row items-center justify-between"
                style={styles.sortItem} >
                <Ionicons name="filter" size={10} color={COLORS.BLACK} />
                <Text className='px-2' style={styles.sortText}>{title}</Text>
                <AntDesign name="caretdown" size={10} color={COLORS.BLACK} />
            </TouchableOpacity>

            <BottomSheetCmp isVisible={isVisible} setIsVisible={setIsVisible}>

                <View style={styles.container}>

                    <View style={{ borderBottomColor: COLORS.LIGHT_GREY4, borderBottomWidth: 1 }}>
                        <Text style={styles.mainText} className='px-5'>Sort</Text>
                    </View>

                    {["Relevance", "Rating: high To Low", "Delivery Time: Low To High", "Delivery Time & Rating" ].map((d, i) => {
                        return (
                            <View key={i} className="flex-row items-center justify-between px-5">
                                <Text>{d}</Text>

                                <CheckBox
                                    checked={selectedIndex === 0}
                                    onPress={() => setIndex(0)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                />
                            </View>
                        )
                    })}

                </View>
            </BottomSheetCmp>

        </>
    )
}

export default SortComponent

const styles = StyleSheet.create({
    sortItem: {
        borderColor: COLORS.LIGHT_GREY2,
        borderWidth: 0.1,
        borderRadius: 10,
        backgroundColor: COLORS.WHITE,
        paddingVertical: 7,
        paddingHorizontal: 5,
        elevation: 5,
        marginHorizontal: 5,
    },
    sortText: {
        fontSize: 12,
        color: COLORS.BLACK,
        fontFamily: "Poppins-SemiBold"
    },
    mainText: {
        fontSize: 28,
        color: COLORS.BLACK,
        fontFamily: "Poppins-Regular"
    },
    container: {
        backgroundColor: COLORS.WHITE,
        paddingVertical: 20,
    }
})