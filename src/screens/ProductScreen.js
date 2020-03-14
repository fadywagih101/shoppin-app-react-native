import React from 'react'
import {Text,StyleSheet,View,ScrollView} from 'react-native'
import ProductList from './Components/ProuductsList'
import ProductsList from './Components/ProuductsList'


const ProductScreen=({navigation})=>{
    return <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
                    <ProductsList navigation={navigation} />
            </ScrollView>
    </View>
}

export default ProductScreen;

