import React from 'react';
import {Text, View, StyleSheet ,SectionList} from 'react-native';


export default class App extends React.Component{
    render(){
        return(
           <View style={styles.container}>
                <SectionList
                    sections={[
                        {title:'A',data:['Ahmed','Abir','Albert','Amine','Anisa','Amira','Anouar']},
                        {title:'B',data:['Boubker','Bouaza','Basma']},
                        {title:'C',data:['Chougdali','Charifa','Chakir','Chama']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item , index) => index}
                />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    //   flex:1,
    marginTop: 75,
    paddingLeft :5,
    backgroundColor: '#5ead97'
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        backgroundColor:"#8fb1aa",
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
    },
});