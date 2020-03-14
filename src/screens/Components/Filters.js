import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import Searchbar from './SearchBar';



const FiltersOptions=['Jeans','Shorts','Jackets','Pants','T-Shirts'];

const Filters=()=>{
    return <View> 
             <View>
                <Searchbar />
             </View>

            <View>
             <FlatList
                       showsHorizontalScrollIndicator={false}
                       horizontal
                       data={FiltersOptions}
                       keyExtractor={filter=>filter}
                       renderItem={({item})=>{
                           return(
                            <View style={styles.Filters}>
                               <TouchableOpacity>
                                   <Text>{item}</Text>
                               </TouchableOpacity>
                            </View>
                           )
                       }}
                     />
            </View>
    </View>
}

const styles=StyleSheet.create({
    Filters:{
        flexDirection:'row',
        paddingHorizontal:15,
        borderColor:'black',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        marginHorizontal:3,
        borderRadius:9,
        paddingVertical:3
    }
})

export default Filters;