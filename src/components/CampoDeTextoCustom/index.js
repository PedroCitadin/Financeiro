import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const CampoTextoPersonalizado = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(true);

  return (
    <View style={{ marginStart: '0%',marginTop: 15, paddingTop: 18, width: '90%', height: 65, borderWidth: 1, borderColor: '#DCDCDC', borderRadius: 10, paddingHorizontal: 7, paddingBottom: 5, elevation: 5, backgroundColor: '#F8F8FF' }}>
      <Text style={{ position: 'absolute', left: 12, top: isFocused ? 0 : 18, fontSize: isFocused ? 14 : 18, color: isFocused ? '#0F8403' : '#666', fontWeight: 'bold' }}>
        {label}
      </Text>
      <TextInput
        {...props}
        style={{ height: 50, fontSize: 20, color: '#696969', borderBottomWidth: 1, borderBottomColor: isFocused ? '#808080' : '#666' , borderBottomWidth: 0}}
        onFocus={handleFocus}
        onBlur={handleBlur}
        cursorColor={'#30C221'}
        
      />
    </View>
  );
};

export default CampoTextoPersonalizado;