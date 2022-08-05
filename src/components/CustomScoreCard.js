import React, {useState} from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import R from '../res/R';


const heading = [{
    title : 'Abdominal Part of Esophagus & Stomach 1',
    image : 'data:image/png;base64,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',
    subject : 'Anatomy'
    },
    {
    title : 'Arm Modules',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7i7fY3IvcdfWzZZGK6cm0WY6R4s7QgjYvw&usqp=CAU',    
    subject : 'Anatomy'
    },
    {
    title : 'Biomolecules and the Cell',
    image : 'https://png.pngtree.com/png-clipart/20200329/ourmid/pngtree-sketch-of-dna-helix-black-and-white-png-image_2167075.jpg',
    subject : 'Biochemistry'	  
    },
    {
    title : 'Endocrine Pancreas',
    image : 'https://c8.alamy.com/comp/T0DGAC/pancreas-human-organ-line-icon-T0DGAC.jpg',
    subject : 'Physiology' 
    },
    {
    title : 'Cranial cavity 6',
    image : 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-black-arc-brain-creative-element-image_1175530.jpg',
    subject : 'Anatomy'  
    },
    {
        title : 'Proteins and Amino Acids 3',
        image : 'https://png.pngtree.com/png-vector/20200410/ourmid/pngtree-black-3d-dna-vector-artwork-png-image_2179105.jpg',
        subject : 'Biochemistry'  
        }
]
    const CustomScoreCard = () => {
        return (
        <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >            
            {heading.map((heading, index) => (                  
            <View key={index} >
              <Image source={{ uri: heading.image }} style={styles.image} />
              <Text style={styles.heading}>            
                {heading.title.length > 10 ? heading.title.slice(0,10) + '\n'+heading.title.slice(10,18)+"..." : heading.title.slice(0,10) }
              </Text>
              <Text style = {styles.subject}>{heading.subject}</Text>
            </View>
          ))}
        </ScrollView>
            
            
        </View>
        )}     

const styles = StyleSheet.create ({
    image : {
        height : R.unit.scale(44),
        width : R.unit.scale(42),
        margin : R.unit.scale(2.4),
        borderColor : R.color.SpanishGray,
        borderRadius : R.unit.scale(2),
        borderWidth : R.unit.scale(0.3)
    },
    heading : {
        textAlign : 'center',
        fontSize :R.unit.scale(6),
        marginBottom : R.unit.scale(3),
        fontWeight : '700'
       },
   subject : {
        textAlign : 'center',
        fontSize : R.unit.scale(5.5),
        fontWeight : '700',
        opacity : R.unit.scale(0.5),
        marginBottom :  R.unit.scale(20)
   }
})

export default CustomScoreCard;