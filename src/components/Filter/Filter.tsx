import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

interface Props {
  title: string;
  options: string[];
  onFilterSelected: (option: string) => void;
}

const Filter: React.FC<Props> = ({title, options, onFilterSelected}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    onFilterSelected(option);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.optionsContainer}>
        <Text style={styles.title}>{title}</Text>
        {options.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionPress(option)}>
            <Text
              style={[
                styles.optionButtonText,
                selectedOption === option && styles.selectedOptionButtonText,
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginLeft: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingBottom: 10,
    paddingTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  optionsContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ccc',
    marginHorizontal: 4,
    marginTop: 4,
  },
  selectedOptionButton: {
    backgroundColor: '#ff8c00',
    borderColor: '#ff8c00',
  },
  optionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedOptionButtonText: {
    color: '#fff',
  },
});

export default React.memo(Filter);
