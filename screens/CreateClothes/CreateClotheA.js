// Correspond à 2A-A du Figma

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TopContainer from '../../Components/css/TopContainer';
import { CardAddClothes } from '../../Components/css/CardAddClothes';
import { SafeAreaView } from 'react-native-safe-area-context';

function CreateClotheA() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <TopContainer />
                <CardAddClothes />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F6FFF8',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})

export default CreateClotheA
