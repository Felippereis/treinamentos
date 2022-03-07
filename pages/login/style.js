//import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
    container:{
        backgroundColor:'#FAF2F2',
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection: 'column',
        margin:5,
        marginTop: 5
    },

    containertext:{
        backgroundColor:'#FAF2F2',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        marginTop: 15
    },

    containercadastrese: {
        flex:1,
        alignItems:'flex-end',
        marginTop:5
        

    },
        
   inputlogin:{   
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:350,
    height:50,
    borderColor:'#828282',
    borderWidth:1,
    marginTop: 15,
    margin:5,
    padding:5,
    backgroundColor:'white'    
   
},

cadastrase: {
    color:'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationStyle: "solid",
    textDecorationColor: "black",

},

containerlabel: {
    flex:1,
    color:'#FF69B4',
    textAlign: 'right',
    margin: 'auto'

},

label: {
    color:'#FF69B4',
    //textAlign: 'right',
    margin: 'auto'

},

btnentrar: {
    alignItems:'center',
    justifyContent:'center',
    color: 'white',
    textAlign: 'center',
    width: 80,
    height: 30,
    backgroundColor:'pink',
    marginTop: 15,
    margin: 8,
    padding: 2,
    paddingTop: 4,
    borderRadius: 8,
    
}
});